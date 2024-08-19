
package org.example.skin_care.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.skin_care.config.PasswordEncoderUtil;
import org.example.skin_care.dto.UserDto;
import org.example.skin_care.entity.User;
import org.example.skin_care.repository.UserRepository;
import org.example.skin_care.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceimpl implements UserService {

    private final UserRepository userRepository;
    @Override
    public String save(UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setFullName(userDto.getFullName());
        user.setMobileNo(userDto.getMobileNo());
        user.setPassword(PasswordEncoderUtil.getInstance().encode(userDto.getPassword()));

        userRepository.save(user);

        return "User successfully saved";
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        userRepository.deleteById(id);
    }


}