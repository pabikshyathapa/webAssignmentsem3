package org.example.skin_care.service;



import org.example.skin_care.dto.ItemDto;
import org.example.skin_care.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    Optional<Item> getByName(String itemName);
    String save(ItemDto itemDto); // Change the return type to Item or a more appropriate type
    List<Item> getAll();
    Optional<Item> getById(Integer id);
    void deleteById(Integer id);

    void update(ItemDto updatedItemDTO);
}


