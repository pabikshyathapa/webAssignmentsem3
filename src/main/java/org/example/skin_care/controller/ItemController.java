package org.example.skin_care.controller;

import lombok.RequiredArgsConstructor;
import org.example.skin_care.dto.ItemDto;
import org.example.skin_care.entity.Item;
import org.example.skin_care.service.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Item")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/data")
    public String getData() {
        return "data retrieved";
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveOrUpdateData(
            @PathVariable(value = "id", required = false) Integer id,
            @RequestPart("itemName") String itemName,
            @RequestPart("description") String description,
            @RequestPart("price") String price,
            @RequestPart("quantity") String quantity,
            @RequestPart("imageUrl") String imageUrl) {

        try {
            ItemDto itemDto = new ItemDto(id, itemName, imageUrl, price, quantity, description);
            itemService.save(itemDto);
            return ResponseEntity.ok("saved/updated data");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error saving/updating data");
        }
    }

    @GetMapping("/getAll")
    public List<Item> getAllData() {
        return itemService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Item> getById(@PathVariable("id") Integer id) {
        return itemService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        itemService.deleteById(id);
    }

    @GetMapping("/getByName/{itemName}")
    public ResponseEntity<Item> getByName(@PathVariable("itemName") String productName) {
        Optional<Item> item = itemService.getByName(productName);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateData(@RequestBody ItemDto updatedItemDTO) {
        try {
            itemService.update(updatedItemDTO);
            return ResponseEntity.ok("Product successfully updated");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating/updating data");
        }
    }


}
