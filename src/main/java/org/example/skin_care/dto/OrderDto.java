package org.example.skin_care.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

    private Integer id;

    @jakarta.validation.constraints.NotNull
    private String orderName;

    @jakarta.validation.constraints.NotNull
    private String imageUrl;

    @jakarta.validation.constraints.NotNull
    private String price;

    @jakarta.validation.constraints.NotNull
    private String quantity;

    @NotNull
    private String description;
}