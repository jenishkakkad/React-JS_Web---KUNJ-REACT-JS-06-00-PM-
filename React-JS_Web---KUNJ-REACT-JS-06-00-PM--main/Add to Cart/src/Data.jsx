import React, { useState, useEffect } from "react";
import Card from "./Card";

const Data = () => {
  const cardData = [
    {
      name: "Spaghetti",
      price: 12.05,
      rating: 4,
      category: "Dinner",
      description: "Delicious spaghetti with rich tomato sauce.",
      image: "/Assets/Spaghetti.webp",
    },
    {
      name: "Gnocchi",
      price: 12.05,
      rating: 5,
      category: "Lunch",
      description: "Soft potato dumplings in a creamy sauce.",
      image: "/Assets/Gnocchi.webp",
    },
    {
      name: "Rovioli",
      price: 12.05,
      rating: 5,
      category: "Dinner",
      description: "Stuffed pasta with herbs and cheese.",
      image: "/Assets/Rovioli.webp",
    },
    {
      name: "Penne Alla Vodak",
      price: 12.05,
      rating: 4,
      category: "Lunch",
      description: "Penne in a creamy tomato vodka sauce.",
      image: "/Assets/Penne Alla Vodak.avif",
    },
    {
      name: "Risoto",
      price: 12.05,
      rating: 4,
      category: "Dinner",
      description: "Creamy Italian rice with mushrooms.",
      image: "/Assets/Risoto.webp",
    },
    {
      name: "Splitza Signature",
      price: 12.05,
      rating: 5,
      category: "Lunch",
      description: "House special pizza with loaded toppings.",
      image: "/Assets/Splitza Signature.webp",
    },
    {
      name: "Chockalet Dount",
      price: 10.05,
      rating: 4,
      category: "Dessert",
      description: "Chocolate glazed donut.",
      image: "/Assets/ChockaletDount.jpg",
    },
    {
      name: "Classic Tiramisu",
      price: 10.05,
      rating: 5,
      category: "Dessert",
      description: "Coffee-flavored Italian dessert.",
      image: "/Assets/ClassicTiramisu.jpeg",
    },
    {
      name: "Frosted Donut",
      price: 10.05,
      rating: 4,
      category: "Dessert",
      description: "Donut with colorful frosting.",
      image: "/Assets/FrostedDonut.jpeg",
    },
    {
      name: "Sweet Cupcake",
      price: 10.05,
      rating: 5,
      category: "Dessert",
      description: "Mini cake with icing.",
      image: "/Assets/SweetCupcake.jpeg",
    },
    {
      name: "Sprite",
      price: 7.05,
      rating: 4,
      category: "Drink",
      description: "Refreshing lemon-lime soda.",
      image: "/Assets/sprite.jpg",
    },
    {
      name: "Fanta",
      price: 7.05,
      rating: 5,
      category: "Drink",
      description: "Orange-flavored fizzy drink.",
      image: "/Assets/fanta.jpeg",
    },
    {
      name: "Pepsi",
      price: 7.05,
      rating: 4,
      category: "Drink",
      description: "Popular cola beverage.",
      image: "/Assets/pepsi.jpg",
    },
    {
      name: "Cocacola",
      price: 7.05,
      rating: 5,
      category: "Drink",
      description: "Classic coke.",
      image: "/Assets/cocacola.webp",
    },
    {
      name: "Thums Up",
      price: 7.05,
      rating: 4,
      category: "Drink",
      description: "Strong fizzy cola.",
      image: "/Assets/thumsUp.png",
    },
  ];

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [showCartOnly, setShowCartOnly] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.name === item.name);
    if (existing) {
      const updated = cartItems.map((i) =>
        i.name === item.name ? { ...i, qty: i.qty + 1 } : i
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (name) => {
    const updated = cartItems.filter((i) => i.name !== name);
    setCartItems(updated);
  };

  const incrementQty = (name) => {
    const updated = cartItems.map((i) =>
      i.name === name ? { ...i, qty: i.qty + 1 } : i
    );
    setCartItems(updated);
  };

  const decrementQty = (name) => {
    const updated = cartItems
      .map((i) =>
        i.name === name ? { ...i, qty: i.qty > 1 ? i.qty - 1 : 1 } : i
      )
      // .filter((i) => i.qty > 0);
    setCartItems(updated);
  };

  const clearCart = () => {
    setCartItems([]); // React state empty
    localStorage.removeItem("cartItems"); // LocalStorage clear
  };

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div>
      <div className="cart-header">
        <button className="btn" onClick={() => setShowCartOnly(!showCartOnly)}>
          {showCartOnly ? "View All Products" : `🛒 Cart (${cartItems.length})`}
        </button>
        {/* ✅ Clear Cart Button */}
        {showCartOnly && cartItems.length > 0 && (
          <button className="btn-clear" onClick={clearCart}>🗑️ Clear Cart</button>
        )}
      </div>

      {showCartOnly ? (
        <div className="cart">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Price: ₹{item.price.toFixed(2)}</p>
                    <p>Qty: {item.qty}</p>
                    <div className="qty-controls">
                      <button onClick={() => incrementQty(item.name)}>+</button>
                      <button onClick={() => decrementQty(item.name)}>-</button>
                      <button onClick={() => removeFromCart(item.name)}>🗑️</button>
                    </div>
                  </div>
                </div>
              ))}
              <h3>Total: ₹{total.toFixed(2)}</h3>
            </div>
          )}
        </div>
      ) : (
        <div className="cards-container">
          {cardData.map((item, index) => (
            <Card
              key={index}
              img={item.image}
              name={item.name}
              price={item.price}
              rating={item.rating}
              category={item.category}
              description={item.description}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Data;