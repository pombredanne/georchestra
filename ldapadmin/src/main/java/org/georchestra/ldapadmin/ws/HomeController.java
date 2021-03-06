/*
 * Copyright (C) 2009-2016 by the geOrchestra PSC
 *
 * This file is part of geOrchestra.
 *
 * geOrchestra is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option)
 * any later version.
 *
 * geOrchestra is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * geOrchestra.  If not, see <http://www.gnu.org/licenses/>.
 */

package org.georchestra.ldapadmin.ws;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.georchestra.commons.configuration.GeorchestraConfiguration;
import org.georchestra.ldapadmin.Configuration;
import org.georchestra.ldapadmin.bs.ExpiredTokenManagement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Displays the home page, also intercepts some assets.
 *
 *
 * @author Mauricio Pazos, Pierre Mauduit
 *
 */
@Controller
public class HomeController {

    private static final Log LOG = LogFactory.getLog(HomeController.class.getName());
    private ExpiredTokenManagement tokenManagement;

    private Configuration config;

    @Autowired
    private GeorchestraConfiguration georConfig;

    @Autowired
    private ServletContext context;

    @Autowired
    public HomeController(ExpiredTokenManagement tokenManagment, Configuration cfg) {
        if(LOG.isDebugEnabled()){
          LOG.debug("home controller initialization");
        }
        this.config = cfg;

        this.tokenManagement = tokenManagment;
        this.tokenManagement.start();
    }

    @RequestMapping(value = "/")
    public void root(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String roles = request.getHeader("sec-roles");

        if (roles != null && !roles.equals("ROLE_ANONYMOUS")) {
            String redirectUrl;
            List<String> rolesList = Arrays.asList(roles.split(";"));

            if (rolesList.contains("ROLE_MOD_LDAPADMIN")) {
                redirectUrl = "/privateui/";
            } else {
                redirectUrl = "/account/userdetails";
            }
            if (LOG.isDebugEnabled()) {
                LOG.debug("root page request -> redirection to " + config.getPublicContextPath() + redirectUrl);
            }
            response.sendRedirect(config.getPublicContextPath() + redirectUrl);
        } else {
            // redirect to CAS
            response.sendRedirect(config.getPublicContextPath() + "/account/userdetails?login");
        }
    }

    @RequestMapping(value="/privateui/")
    public String privateui(HttpServletRequest request) throws IOException{
        String roles = request.getHeader("sec-roles");
        if(roles != null && !roles.equals("ROLE_ANONYMOUS")) {
            List<String> rolesList = Arrays.asList(roles.split(";"));
            if(rolesList.contains("ROLE_MOD_LDAPADMIN")) {
                return "privateUi";
            }
        }
        return "forbidden";
    }

}
