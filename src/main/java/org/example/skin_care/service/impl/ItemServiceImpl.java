package org.example.skin_care.service.impl;


import lombok.RequiredArgsConstructor;
import org.example.skin_care.dto.ItemDto;
import org.example.skin_care.entity.Item;
import org.example.skin_care.repository.ItemRepository;
import org.example.skin_care.service.ItemService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    @Override
    public String save(ItemDto itemDto) {
        Item item = new Item();

        if (itemDto.getId() != null) {
            item = itemRepository.findById(itemDto.getId()).orElseThrow(() -> new NullPointerException("Data not found"));
        }

        item.setItemName(itemDto.getItemName());
        item.setPrice(itemDto.getPrice());
        item.setImageUrl(itemDto.getImageUrl());
        item.setQuantity(itemDto.getQuantity());
        item.setDescription(itemDto.getDescription());

        itemRepository.save(item);

        return "created";
    }


    @Override
    public Optional<Item> getByName(String itemName) {

        return itemRepository.findByItemName(itemName);
    }


    @Override
    public List<Item> getAll() {
        return itemRepository.findAll();
    }

    @Override
    public Optional<Item> getById(Integer id) {
        return itemRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        itemRepository.deleteById(id);
    }

    @Override
    public void update(ItemDto updatedItemDTO) {

        Optional<Item> existingItemOptional = itemRepository.findByItemName(updatedItemDTO.getItemName());

        if (existingItemOptional.isPresent()) {
            Item existingItem = existingItemOptional.get();

            // Update the existing item with new information
            existingItem.setPrice(updatedItemDTO.getPrice());;
            existingItem.setDescription(updatedItemDTO.getDescription());
            existingItem.setImageUrl(updatedItemDTO.getImageUrl());
            existingItem.setQuantity(updatedItemDTO.getQuantity());

            // Save the updated item
            itemRepository.save(existingItem);
        } else {
            // Handle the case where the item to update is not found
            throw new RuntimeException("Item not found for update");
        }
    }
}
