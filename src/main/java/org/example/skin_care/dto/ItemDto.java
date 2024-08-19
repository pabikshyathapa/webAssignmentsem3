package org.example.skin_care.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class ItemDto {

    private Integer id;

    @NotNull
    private String itemName;

    @NotNull
    private String imageUrl;

    @NotNull
    private String price;

    @NotNull
    private String quantity;

    @NotNull
    private String description;
}