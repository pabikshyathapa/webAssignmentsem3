package org.example.skin_care.service;



import org.example.skin_care.dto.OrderDto;
import org.example.skin_care.entity.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    String save(OrderDto orderDTO);

    String createOrder(OrderDto orderDTO);

    List<Order> getAllOrders();

    Optional<Order> getOrderById(Integer id);

    void deleteOrderById(Integer id);


}