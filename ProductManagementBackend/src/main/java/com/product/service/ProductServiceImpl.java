package com.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.model.Product;
import com.product.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	
	
	@Autowired
	private ProductRepository productRepo;
	
	@Override
	public Product saveProduct(Product product) {
		
		return productRepo.save(product);
	}

	@Override
	public List<Product> getAllProducts() {
		
		return productRepo.findAll();
	}

	@Override
	public Product getProductById(Integer id) {
		
		return productRepo.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		
		Product product = productRepo.findById(id).get();
		
		if(product != null) {
			productRepo.delete(product);
			return "Product deleted successfully";
		}
		
		return "product not found";
		
	}
	
	@Override
	public Product editProduct(Product modifiedProduct, Integer id) {
		
		Product oldProduct = productRepo.findById(id).get();
		
		oldProduct.setProductName(modifiedProduct.getProductName());
		oldProduct.setPrice(modifiedProduct.getPrice());
		oldProduct.setDescription(modifiedProduct.getDescription());
		oldProduct.setStatus(modifiedProduct.getStatus());
		
		return productRepo.save(oldProduct);
	}
	
	
}
