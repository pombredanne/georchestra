package extractorapp.ws;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.mail.internet.MimeBodyPart;
import javax.servlet.http.HttpServletRequest;

public class EmailFactoryPigma extends AbstractEmailFactory {
	
	@Override
	public Email createEmail(HttpServletRequest request, final String[] recipients,
			final String url) throws IOException {
		
		final long expiry = this.expireDeamon.getExpiry();
		final String msgAck = readFile(request, emailAckTemplateFile);
		final String msgDone = readFile(request, emailTemplateFile);
		final String conv = request.getHeader("sec-convention");
		return new Email(request, recipients, emailSubject,
				this.smtpHost,
				this.smtpPort,
				this.replyTo,
				this.from,
				this.bodyEncoding,
				this.subjectEncoding,
				this.languages
		) {
			public void sendDone(List<String> successes, List<String> failures,
		            List<String> oversized, long fileSize) throws MessagingException {
				
		        LOG.debug("preparing to send extraction done email");
		        String msg = new String(msgDone);
		        if (msg != null) {
		            MimeBodyPart bodyPart = new MimeBodyPart();
		            msg = msg.replace("{link}", url);
		            msg = msg.replace("{emails}", Arrays.toString(recipients));
		            msg = msg.replace("{expiry}", String.valueOf(expiry));
		            msg = msg.replace("{successes}", format(successes));
		            msg = msg.replace("{failures}", format(failures));
		            msg = msg.replace("{oversized}", format(oversized));
		            msg = msg.replace("{convention}", conv);
		            msg = formatTimeEstimation(msg, fileSize);
		            bodyPart.setText(msg, bodyEncoding, "html");
		            bodyPart.setContentLanguage(languages);
		        }
		        sendMsg(msg);
		    }
		    
		    public void sendAck() throws AddressException, MessagingException {
		        LOG.debug("preparing to send extraction ack email");
				sendMsg(msgAck);
			}
		};
	}

}
