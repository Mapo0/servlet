package dto;

import models.User;

import java.util.ArrayList;
import java.util.List;

public class UserDTO {
    public List<User> users(){
        List<User> users = new ArrayList<User>();
        users.add(new User("admin","admin"));
        users.add(new User("admin1","admin1"));
        users.add(new User("admin2","admin2"));

        return users;
    }
}
