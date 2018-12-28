package dto;

import models.User;

import java.util.ArrayList;
import java.util.List;

public class UserDTO {
    private List<User> userList = new ArrayList<>();

    public UserDTO() {
        userList.add(new User("admin","admin"));
        userList.add(new User("admin1","admin1"));
        userList.add(new User("admin2","admin2"));
    }

    public UserDTO(List<User> userList) {
        this.userList = userList;
    }

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }


}
