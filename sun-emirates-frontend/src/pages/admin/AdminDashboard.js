import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ---------------- MOCK DATA ---------------- */

const initialEquipment = [
  { id: 1, name: "Lathe Machine", model: "Industrial Series", capacity: "12' x 24'", description: "Precision turning operations", image: "" },
  { id: 2, name: "Radial Drilling Machine", model: "RD-1200", capacity: "50mm", description: "Heavy duty drilling", image: "" },
  { id: 3, name: "Hydraulic Shearing Machine", model: "HS-1025", capacity: "10mm x 2500mm", description: "Precision sheet cutting", image: "" },
];

const initialGallery = [
  { id: 1, title: "Main Workshop", category: "workshop", image: "/images/MS/IndustrialSheds.jpg" },
  { id: 2, title: "Steel Grating", category: "fabrication", image: "/images/MS/Grating.jpg" },
];

const initialClients = [
  { id: 1, clientName: "KHANSAHEB", logo: "/images/Clients/Clients1.png" },
  { id: 2, clientName: "AL Basti & Muktha LLC", logo: "/images/Clients/Clients2.png" },
];

const initialMessages = [
  { id: 1, name: "John Smith", email: "john@example.com", message: "Interested in fabrication services.", date: "2024-01-15" },
];

/* ---------------- COMPONENT ---------------- */

const AdminDashboard = () => {

  const [activeTab, setActiveTab] = useState("equipment");

  const [equipment, setEquipment] = useState(initialEquipment);
  const [_gallery, _setGallery] = useState(initialGallery);
  const [_clients, _setClients] = useState(initialClients);
  const [messages, setMessages] = useState(initialMessages);

  const [showEquipmentForm, setShowEquipmentForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [equipmentForm, setEquipmentForm] = useState({
    name: "",
    model: "",
    capacity: "",
    description: "",
    image: ""
  });

  const tabs = [
    { id: "equipment", label: "Equipments" },
    { id: "gallery", label: "Gallery" },
    { id: "clients", label: "Clients" },
    { id: "messages", label: "Messages" }
  ];

  /* ---------------- EQUIPMENT HANDLERS ---------------- */

  const handleEquipmentSubmit = (e) => {
    e.preventDefault();

    if (editingItem) {
      setEquipment(
        equipment.map((item) =>
          item.id === editingItem.id ? { ...equipmentForm, id: editingItem.id } : item
        )
      );
      setEditingItem(null);
    } else {
      setEquipment([...equipment, { ...equipmentForm, id: Date.now() }]);
    }

    setShowEquipmentForm(false);
    setEquipmentForm({ name: "", model: "", capacity: "", description: "", image: "" });
  };

  const deleteEquipment = (id) => {
    setEquipment(equipment.filter((item) => item.id !== id));
  };

  const editEquipment = (item) => {
    setEquipmentForm(item);
    setEditingItem(item);
    setShowEquipmentForm(true);
  };

  /* ---------------- MESSAGE DELETE ---------------- */

  const deleteMessage = (id) => {
    setMessages(messages.filter((item) => item.id !== id));
  };

  /* ---------------- UI ---------------- */

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f5f5" }}>

      {/* SIDEBAR */}

      <aside
        style={{
          width: "250px",
          background: "#2b2b2b",
          color: "#fff",
          padding: "20px 0"
        }}
      >
        <h2 style={{ padding: "0 20px", borderBottom: "1px solid #444", paddingBottom: "20px" }}>
          Admin Panel
        </h2>

        <ul style={{ listStyle: "none", padding: "20px 0" }}>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "12px 20px",
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === tab.id ? "#ff7a00" : "transparent",
                  color: "#fff"
                }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ padding: "20px" }}>
          <Link to="/" style={{ color: "#aaa", textDecoration: "none" }}>
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}

      <main style={{ flex: 1, padding: "30px" }}>

        {/* EQUIPMENT TAB */}

        {activeTab === "equipment" && (
          <div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
              <h2>Equipment Management</h2>

              <button
                onClick={() => {
                  setShowEquipmentForm(true);
                  setEditingItem(null);
                }}
                style={{
                  padding: "10px 20px",
                  background: "#ff7a00",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                + Add Equipment
              </button>
            </div>

            {showEquipmentForm && (
              <div style={{ background: "#fff", padding: "30px", marginBottom: "30px" }}>
                <h3>{editingItem ? "Edit Equipment" : "Add Equipment"}</h3>

                <form onSubmit={handleEquipmentSubmit}>

                  <input
                    type="text"
                    placeholder="Equipment Name"
                    value={equipmentForm.name}
                    onChange={(e) =>
                      setEquipmentForm({ ...equipmentForm, name: e.target.value })
                    }
                    required
                  />

                  <input
                    type="text"
                    placeholder="Model"
                    value={equipmentForm.model}
                    onChange={(e) =>
                      setEquipmentForm({ ...equipmentForm, model: e.target.value })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Capacity"
                    value={equipmentForm.capacity}
                    onChange={(e) =>
                      setEquipmentForm({ ...equipmentForm, capacity: e.target.value })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Description"
                    value={equipmentForm.description}
                    onChange={(e) =>
                      setEquipmentForm({ ...equipmentForm, description: e.target.value })
                    }
                  />

                  <div style={{ marginTop: "20px" }}>
                    <button type="submit">Save</button>

                    <button
                      type="button"
                      onClick={() => setShowEquipmentForm(false)}
                    >
                      Cancel
                    </button>
                  </div>

                </form>
              </div>
            )}

            {/* EQUIPMENT TABLE */}

            <table style={{ width: "100%", background: "#fff" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Capacity</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {equipment.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.model}</td>
                    <td>{item.capacity}</td>
                    <td>{item.description}</td>

                    <td>
                      <button onClick={() => editEquipment(item)}>Edit</button>

                      <button onClick={() => deleteEquipment(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}

        {/* MESSAGES TAB */}

        {activeTab === "messages" && (
          <div>

            <h2>Contact Messages</h2>

            <table style={{ width: "100%", background: "#fff" }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {messages.map((item) => (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>

                    <td>
                      <button onClick={() => deleteMessage(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}

      </main>

    </div>
  );
};

export default AdminDashboard;
