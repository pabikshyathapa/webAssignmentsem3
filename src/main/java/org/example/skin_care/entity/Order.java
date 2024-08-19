package org.example.skin_care.entity;

import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders", uniqueConstraints = {
        @UniqueConstraint(name = "UNIQUE_order_name", columnNames = "orderName")
})


public class Order {
    @Id
    @SequenceGenerator(name = "order_seq_gen", sequenceName = "orders_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "orders_seq_gen", strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(name = "orderName", nullable = false)
    private String orderName;

    @Column(name = "images", nullable = false)
    private String imageUrl;

    @Column(name = "price", nullable = false)
    private String price;

    @Column(name = "quantity", nullable = false)
    private String quantity;

    @Column(name = "description", nullable = false)
    private String description;

}