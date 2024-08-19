package org.example.skin_care.repository;

import org.example.skin_care.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "select * from users where email=?1", nativeQuery = true)
    Optional<User> getUserByUsername(String username);
}
