package servlets;


import dto.UserDTO;
import models.User;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class UserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("/login.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String login = req.getParameter("login");
        String password = req.getParameter("password");
// System.out.println(login+ password);


        UserDTO userDTO = new UserDTO();
        for (User user : userDTO.getUserList()) {
            if (user.getLogin().equals(login)&& user.getPassword().equals(password)) {
                req.getRequestDispatcher("/index.jsp").forward(req, resp);
                return;
            }
            else{
                resp.sendRedirect("/error");
                return;
            }
        }

    }
}
