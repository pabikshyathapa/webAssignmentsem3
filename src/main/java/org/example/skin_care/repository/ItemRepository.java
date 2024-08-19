package org.example.skin_care.repository;


import org.example.skin_care.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface ItemRepository extends JpaRepository <Item, Integer> {
    Optional<Item> findByItemName(String itemName);

}
