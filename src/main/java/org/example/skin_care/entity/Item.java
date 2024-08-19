package org.example.skin_care.entity;

import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "items", uniqueConstraints = {
        @UniqueConstraint(name = "UNIQUE_item_name", columnNames = "itemName")
})
public class Item {

    @Id
    @SequenceGenerator(name = "items_seq_gen", sequenceName = "items_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "items_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "itemName", nullable = false)
    private String itemName;

    @Column(name = "images", nullable = false)
    private String imageUrl;

    @Column(name = "price", nullable = false)
    private String price;

    @Column(name = "quantity", nullable = false)
    private String quantity;

    @Column(name = "description", nullable = false)
    private String description;
}
