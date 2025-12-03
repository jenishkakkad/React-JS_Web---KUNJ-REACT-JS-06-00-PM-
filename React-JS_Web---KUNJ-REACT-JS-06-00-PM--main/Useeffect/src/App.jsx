// import React, {useState, useEffect } from "react";




// export const App = () => {
//   // let count = 0;
//   let [count, setCount] = useState(0);

  
//   useEffect(() => {
//     alert(`hello world!`);
//   }, []); 
//   // useEffect(() => {
//   //   alert(`hello JR!`);
//   // }, ); 
//   // useEffect(() => {
//   //   alert(`hello RJ!`);
//   // }, [count]); 

//   const inc = () => {
//     console.log("Button clicked!");
//     // count++;
//     setCount(count + 1);
//     console.log(count);
//   };

//   const dec = () => {
//      console.log("Button clicked!");
//     if (count > 0) {
//       setCount(count - 1);
//       console.log(count - 1);
//     } else {
//       alert("Cannot decrement below 0");
//     }
//   };

//   return (
//     <>
     

//       <button onClick={inc}>+</button>
//       <button onClick={dec}>-</button>


//       <h1>{count}</h1>
//     </>
//   );
// };

// export default App;


import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    alert("Component render hone ke baad useEffect chala");

   
  });

  return <h1>Hello useEffect!</h1>;

  
};



export default App;

// import React, { useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     alert("Component render hone ke baad useEffect chala");
//   });

//   return <h1>Hello useEffect!</h1>;
// };

// export default App;

// import React, { useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     alert("Sirf ek baar chala, jab component mount hua");

//   }, []); // empty dependency array

//   return <h1>Mount Example</h1>;
// };

// export default App;

// import React, { useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     alert("Sirf ek baar chala, jab component mount hua");
//   }, []); // empty dependency array

//   return <h1>Mount Example</h1>;
// };

// export default App;

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     alert(`count value change hua: ${count}`);
//   }, [count]); // sirf tab chalega jab count change hoga

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </>
//   );
// };

// export default App;

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <button onClick={() => setShow(!show)}>Toggle Child</button>
//       {show && <Child />}
//     </>
//   );
// };

// const Child = () => {
//   useEffect(() => {
//     alert("Child Mounted");

//     return () => {
//       alert("Child Unmounted");
//     };
//   }, []);

//   return <h2>I am Child Component</h2>;
// };

// export default App;

// import React, { useEffect, useState } from "react";

// const UserCard = ({ name, email, phone }) => {
//   return (
//     <div style={cardStyle}>
//       <h3>{name}</h3>
//       <p>Email: {email}</p>
//       <p>Phone: {phone}</p>
//     </div>
//   );
// };

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [theme, setTheme] = useState("light");
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchUsers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       setUsers(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   const isDark = theme === "dark";

//   return (
//     <div
//       style={{
//         ...containerStyle,
//         backgroundColor: isDark ? "#1e1e1e" : "#fff",
//         color: isDark ? "#f1f1f1" : "#000",
//       }}
//     >
//       <h1 style={{ textAlign: "center" }}>📋 User Directory</h1>

//       <div style={controlsStyle}>
//         <input
//           type="text"
//           placeholder="🔍 Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={inputStyle}
//         />
//         <button onClick={fetchUsers} style={buttonStyle}>
//           🔄 Refresh
//         </button>
//         <button onClick={toggleTheme} style={buttonStyle}>
//           {isDark ? "☀️ Light" : "🌙 Dark"} Mode
//         </button>
//       </div>

//       {loading && <p style={loadingStyle}>⏳ Loading users...</p>}
//       {error && <p style={errorStyle}>❌ Error: {error}</p>}

//       {!loading && !error && (
//         <div style={gridStyle}>
//           {filteredUsers.map((user) => (
//             <UserCard
//               key={user.id}
//               name={user.name}
//               email={user.email}
//               phone={user.phone}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// const containerStyle = {
//   maxWidth: "900px",
//   margin: "0 auto",
//   padding: "20px",
//   fontFamily: "'Segoe UI', sans-serif",
//   minHeight: "100vh",
//   transition: "all 0.3s ease-in-out",
// };

// const controlsStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: "20px",
//   gap: "10px",
//   flexWrap: "wrap",
// };

// const inputStyle = {
//   padding: "10px",
//   fontSize: "16px",
//   borderRadius: "6px",
//   border: "1px solid #ccc",
//   flexGrow: 1,
// };

// const buttonStyle = {
//   padding: "10px 15px",
//   fontSize: "14px",
//   border: "none",
//   borderRadius: "6px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   cursor: "pointer",
//   transition: "background-color 0.2s",
// };

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//   gap: "20px",
// };

// const cardStyle = {
//   background: "#f4f4f4",
//   padding: "15px",
//   borderRadius: "10px",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   transition: "transform 0.2s ease-in-out",
// };

// const loadingStyle = {
//   textAlign: "center",
//   fontSize: "1.2rem",
// };

// const errorStyle = {
//   color: "red",
//   textAlign: "center",
//   fontWeight: "bold",
// };


// import React, { useEffect, useState } from "react";

// const UserCard = ({ name, email, phone, isDark }) => {
//   return (
//     <div
//       style={{
//         background: isDark ? "#2a2a2a" : "#f4f4f4",
//         color: isDark ? "#f1f1f1" : "#000",
//         padding: "15px",
//         borderRadius: "10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//         transition: "transform 0.2s ease-in-out",
//       }}
//     >
//       <h3>{name}</h3>
//       <p>Email: {email}</p>
//       <p>Phone: {phone}</p>
//     </div>
//   );
// };

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [theme, setTheme] = useState("light");
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchUsers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       setUsers(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   const isDark = theme === "dark";

//   return (
//     <div
//       style={{
//         ...containerStyle,
//         backgroundColor: isDark ? "#1e1e1e" : "#fff",
//         color: isDark ? "#f1f1f1" : "#000",
//       }}
//     >
//       <h1 style={{ textAlign: "center" }}>📋 User Directory</h1>

//       <div style={controlsStyle}>
//         <input
//           type="text"
//           placeholder="🔍 Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={inputStyle}
//         />
//         <button onClick={fetchUsers} style={buttonStyle}>
//           🔄 Refresh
//         </button>
//         <button onClick={toggleTheme} style={buttonStyle}>
//           {isDark ? "☀️ Light" : "🌙 Dark"} Mode
//         </button>
//       </div>

//       {loading && <p style={loadingStyle}>⏳ Loading users...</p>}
//       {error && <p style={errorStyle}>❌ Error: {error}</p>}

//       {!loading && !error && filteredUsers.length > 0 ? (
//         <div style={gridStyle}>
//           {filteredUsers.map((user) => (
//             <UserCard
//               key={user.id}
//               name={user.name}
//               email={user.email}
//               phone={user.phone}
//               isDark={isDark}
//             />
//           ))}
//         </div>
//       ) : (
//         !loading && !error && (
//           <p style={errorStyle}>😕 No users match your search.</p>
//         )
//       )}
//     </div>
//   );
// };

// export default App;

// const containerStyle = {
//   maxWidth: "900px",
//   margin: "0 auto",
//   padding: "20px",
//   fontFamily: "'Segoe UI', sans-serif",
//   minHeight: "100vh",
//   transition: "all 0.3s ease-in-out",
// };

// const controlsStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: "20px",
//   gap: "10px",
//   flexWrap: "wrap",
// };

// const inputStyle = {
//   padding: "10px",
//   fontSize: "16px",
//   borderRadius: "6px",
//   border: "1px solid #ccc",
//   flexGrow: 1,
// };

// const buttonStyle = {
//   padding: "10px 15px",
//   fontSize: "14px",
//   border: "none",
//   borderRadius: "6px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   cursor: "pointer",
//   transition: "background-color 0.2s",
// };

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//   gap: "20px",
// };

// const loadingStyle = {
//   textAlign: "center",
//   fontSize: "1.2rem",
// };

// const errorStyle = {
//   color: "red",
//   textAlign: "center",
//   fontWeight: "bold",
// };

// import React, { useEffect, useState } from "react";

// const UserCard = ({ name, email, phone, isDark }) => {
//   return (
//     <div
//       style={isDark ? darkCardStyle : lightCardStyle}
//     >
//       <h3>{name}</h3>
//       <p>Email: {email}</p>
//       <p>Phone: {phone}</p>
//     </div>
//   );
// };

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [theme, setTheme] = useState("light");
//   const [searchTerm, setSearchTerm] = useState("");

//   const isDark = theme === "dark";

//   const fetchUsers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const url = isDark
//         ? "https://jsonplaceholder.typicode.com/users?_start=0&_limit=5"
//         : "https://jsonplaceholder.typicode.com/users?_start=5&_limit=5";

//       const res = await fetch(url);
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       setUsers(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, [theme]); // Fetch different users on theme change

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <div
//       style={{
//         ...containerStyle,
//         backgroundColor: isDark ? "#1e1e1e" : "#fff",
//         color: isDark ? "#f1f1f1" : "#000",
//       }}
//     >
//       <h1 style={{ textAlign: "center" }}>📋 User Directory</h1>

//       <div style={controlsStyle}>
//         <input
//           type="text"
//           placeholder="🔍 Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={inputStyle}
//         />
//         <button onClick={fetchUsers} style={buttonStyle}>
//           🔄 Refresh
//         </button>
//         <button onClick={toggleTheme} style={buttonStyle}>
//           {isDark ? "☀️ Light" : "🌙 Dark"} Mode
//         </button>
//       </div>

//       {loading && <p style={loadingStyle}>⏳ Loading users...</p>}
//       {error && <p style={errorStyle}>❌ Error: {error}</p>}

//       {!loading && !error && filteredUsers.length > 0 ? (
//         <div style={gridStyle}>
//           {filteredUsers.map((user) => (
//             <UserCard
//               key={user.id}
//               name={user.name}
//               email={user.email}
//               phone={user.phone}
//               isDark={isDark}
//             />
//           ))}
//         </div>
//       ) : (
//         !loading && !error && (
//           <p style={errorStyle}>😕 No users match your search.</p>
//         )
//       )}
//     </div>
//   );
// };

// export default App;

// const containerStyle = {
//   maxWidth: "900px",
//   margin: "0 auto",
//   padding: "20px",
//   fontFamily: "'Segoe UI', sans-serif",
//   minHeight: "100vh",
//   transition: "all 0.3s ease-in-out",
// };

// const controlsStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: "20px",
//   gap: "10px",
//   flexWrap: "wrap",
// };

// const inputStyle = {
//   padding: "10px",
//   fontSize: "16px",
//   borderRadius: "6px",
//   border: "1px solid #ccc",
//   flexGrow: 1,
// };

// const buttonStyle = {
//   padding: "10px 15px",
//   fontSize: "14px",
//   border: "none",
//   borderRadius: "6px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   cursor: "pointer",
//   transition: "background-color 0.2s",
// };

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//   gap: "20px",
// };

// const loadingStyle = {
//   textAlign: "center",
//   fontSize: "1.2rem",
// };

// const errorStyle = {
//   color: "red",
//   textAlign: "center",
//   fontWeight: "bold",
// };

// const lightCardStyle = {
//   background: "#f4f4f4",
//   color: "#000",
//   padding: "15px",
//   borderRadius: "10px",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   transition: "all 0.3s ease-in-out",
// };

// const darkCardStyle = {
//   background: "#2a2a2a",
//   color: "#f1f1f1",
//   padding: "15px",
//   borderRadius: "10px",
//   boxShadow: "0 2px 8px rgba(255,255,255,0.1)",
//   transition: "all 0.3s ease-in-out",
// };

// import React, { useState, useEffect } from "react";

// const productsData = [
//   {
//     id: 1,
//     title: "Running Shoes",
//     price: "$80",
//     image: "/images/shoe1.jpg",
//     category: "shoes",
//   },
//   {
//     id: 2,
//     title: "Leather Bag",
//     price: "$120",
//     image: "/images/bag1.jpg",
//     category: "bags",
//   },
//   {
//     id: 3,
//     title: "Digital Watch",
//     price: "$45",
//     image: "/images/watch1.jpg",
//     category: "watches",
//   },
//   {
//     id: 4,
//     title: "White Sneakers",
//     price: "$90",
//     image: "/images/shoe2.jpg",
//     category: "shoes",
//   },
//   {
//     id: 5,
//     title: "Travel Backpack",
//     price: "$110",
//     image: "/images/bag2.jpg",
//     category: "bags",
//   },
// ];

// const categories = ["all", "shoes", "bags", "watches"];

// const ProductCard = ({ title, price, image, isDark }) => {
//   return (
//     <div
//       style={{
//         background: isDark ? "#2a2a2a" : "#f9f9f9",
//         color: isDark ? "#fff" : "#000",
//         borderRadius: "12px",
//         padding: "15px",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//         transition: "0.3s",
//       }}
//     >
//       <img
//         src={image}
//         alt={title}
//         style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
//       />
//       <h3>{title}</h3>
//       <p style={{ fontWeight: "bold" }}>{price}</p>
//     </div>
//   );
// };

// const App = () => {
//   const [theme, setTheme] = useState("light");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const isDark = theme === "dark";

//   useEffect(() => {
//     if (selectedCategory === "all") {
//       setFilteredProducts(productsData);
//     } else {
//       const filtered = productsData.filter(
//         (p) => p.category === selectedCategory
//       );
//       setFilteredProducts(filtered);
//     }
//   }, [selectedCategory]);

//   return (
//     <div
//       style={{
//         backgroundColor: isDark ? "#121212" : "#ffffff",
//         color: isDark ? "#ffffff" : "#000000",
//         minHeight: "100vh",
//         padding: "20px",
//         fontFamily: "Segoe UI, sans-serif",
//         transition: "0.3s",
//       }}
//     >
//       <h1 style={{ textAlign: "center" }}>🛍️ My Product Store</h1>

//       <div style={controlStyle}>
//         <select
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           value={selectedCategory}
//           style={selectStyle}
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat.toUpperCase()}
//             </option>
//           ))}
//         </select>

//         <button onClick={() => setTheme(isDark ? "light" : "dark")} style={btnStyle}>
//           {isDark ? "☀️ Light" : "🌙 Dark"} Mode
//         </button>
//       </div>

//       <div style={gridStyle}>
//         {filteredProducts.map((p) => (
//           <ProductCard
//             key={p.id}
//             title={p.title}
//             price={p.price}
//             image={p.image}
//             isDark={isDark}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// // 🌟 Styles
// const controlStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   margin: "20px 0",
//   gap: "10px",
//   flexWrap: "wrap",
// };

// const selectStyle = {
//   padding: "10px",
//   fontSize: "16px",
//   borderRadius: "8px",
// };

// const btnStyle = {
//   padding: "10px 15px",
//   fontSize: "14px",
//   border: "none",
//   borderRadius: "8px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   cursor: "pointer",
// };

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//   gap: "20px",
// };


// import React from "react";

// // 5 sample product data
// const products = [
//   { id: 1, title: "Product 1", price: "$29", image: "/images/prod1.jpg" },
//   { id: 2, title: "Product 2", price: "$39", image: "/images/prod2.jpg" },
//   { id: 3, title: "Product 3", price: "$49", image: "/images/prod3.jpg" },
//   { id: 4, title: "Product 4", price: "$59", image: "/images/prod4.jpg" },
//   { id: 5, title: "Product 5", price: "$69", image: "/images/prod5.jpg" },
// ];

// const ProductCard = ({ title, price, image}) => (
//   <div
//     style={{
//       backgroundColor : "black",
//       color: "white",
//       padding: "15px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       transition: "0.3s",
//       width: "250px",
//     }}
//   >
//     <img
//       src={image}
//       alt={title}
//       style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
//     />
//     <h3>{title}</h3>
//     <p style={{ fontWeight: "bold" }}>{price}</p>
//   </div>
// );

// const App = () => {
  

//   // Optional: useEffect just to demonstrate theme changes
 

//   return (
//    <>
//      <h1 style={{ textAlign: "center" }}>🛒 My Products</h1>

//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <button
          
//           style={{
//             padding: "10px 20px",
//             borderRadius: "8px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//         </button>
//       </div>

//       <div
//         style={{
//           display: "flex",
          
//           gap: "20px",
//         }}
//       >
//         {products.map((p) => (
//           <ProductCard
//             key={p.id}
//             title={p.title}
//             price={p.price}
//             image={p.image}
//           />
//         ))}
//       </div>
    
//    </>
     
//   );
// };

// export default App;
