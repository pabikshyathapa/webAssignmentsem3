package org.example.skin_care.service;


import org.example.skin_care.dto.UserDto;
import org.example.skin_care.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    String save(UserDto userDto);

    List<User> getAll();

    Optional<User> getById(Integer id);

    void deleteById(Integer id);
}
