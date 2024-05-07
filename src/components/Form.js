import { useState } from "react";
export default function Form({ onAddItems }) {
  // declare our States
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Submit new Item
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    // Create new Obj from data
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // Add new Item to our list
    onAddItems(newItem);

    // Clear Input
    setDescription("");
    setQuantity(1);
  }

  // Load Form
  return (
    // Update both input state
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* loop through 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
