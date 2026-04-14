import React, { useState } from 'react';

const App = () => {
  const [hovered, setHovered] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');

  // --- Vibrant Dark Theme ---
  const theme = {
    bg: '#050a07', // Deep Dark Green-Black
    primary: '#1a3c2a', // Forest Green
    accent: '#6ab04c', // Vibrant Lime Green
    gold: '#ffcc00', // Gold for highlights
    text: '#ffffff',
    cardBg: '#0f1a13'
  };

  const plants = [
    { id: 1, name: "Monstera Deliciosa", price: "₹899", img: "https://images.pexels.com/photos/6597437/pexels-photo-6597437.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 2, name: "Snake Plant", price: "₹450", img: "https://images.pexels.com/photos/7513164/pexels-photo-7513164.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 3, name: "Fiddle Leaf Fig", price: "₹1,200", img: "https://images.pexels.com/photos/7013399/pexels-photo-7013399.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 4, name: "Peace Lily", price: "₹350", img: "https://images.pexels.com/photos/6353957/pexels-photo-6353957.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 5, name: "Rubber Plant", price: "₹650", img: "https://images.pexels.com/photos/4505171/pexels-photo-4505171.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 6, name: "Aloe Vera", price: "₹299", img: "https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 7, name: "Spider Plant", price: "₹199", img: "https://images.pexels.com/photos/4622993/pexels-photo-4622993.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 8, name: "ZZ Plant", price: "₹750", img: "https://images.pexels.com/photos/7512032/pexels-photo-7512032.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 9, name: "Bonsai Tree", price: "₹2,500", img: "https://images.pexels.com/photos/1030951/pexels-photo-1030951.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 10, name: "Bird of Paradise", price: "₹1,800", img: "https://images.pexels.com/photos/4505167/pexels-photo-4505167.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 11, name: "Fern Plant", price: "₹400", img: "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 12, name: "Jade Plant", price: "₹250", img: "https://images.pexels.com/photos/6045030/pexels-photo-6045030.jpeg?auto=compress&cs=tinysrgb&w=500" }
  ];

  const styles = {
    container: { backgroundColor: theme.bg, color: theme.text, fontFamily: "'Inter', sans-serif" },
    nav: {
      display: 'flex', justifyContent: 'space-between', padding: '25px 8%',
      background: 'rgba(5, 10, 7, 0.95)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)'
    },
    hero: {
      height: '90vh', display: 'flex', alignItems: 'center', padding: '0 8%',
      background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg?auto=compress&cs=tinysrgb&w=1600")',
      backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'left'
    },
    grid: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px', padding: '60px 8%'
    },
    plantCard: (id) => ({
      background: theme.cardBg, borderRadius: '25px', padding: '15px',
      border: `1px solid ${hovered === id ? theme.accent : '#1a261f'}`,
      transform: hovered === id ? 'translateY(-15px)' : 'none',
      transition: 'all 0.4s ease', cursor: 'pointer'
    }),
    formSection: {
      background: `linear-gradient(135deg, ${theme.primary} 0%, #050a07 100%)`,
      padding: '100px 8%', margin: '50px 0', display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      gap: '80px', alignItems: 'center'
    },
    input: {
      width: '100%', padding: '18px', marginBottom: '15px', borderRadius: '12px',
      border: '1px solid #222', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none'
    },
    btn: {
      padding: '18px 40px', background: theme.accent, color: 'white',
      border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s'
    }
  };

  return (
    <div style={styles.container}>
      {/* 1. Navbar */}
      <nav style={styles.nav}>
        <h2 style={{ color: theme.accent, margin: 0, fontSize: '2rem' }}>GREEN<span style={{ color: theme.gold }}>HAVEN</span></h2>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center', fontWeight: 'bold' }}>
          <span style={{ color: theme.accent }}>Collection</span>
          <span>Care</span>
          <span>Contact</span>
          <button style={{ ...styles.btn, padding: '10px 25px' }}>Store</button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section style={styles.hero}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '5.5rem', lineHeight: 1, margin: 0 }}>Premium <br/> <span style={{ color: theme.accent }}>Indoor</span> Plants.</h1>
          <p style={{ fontSize: '1.4rem', margin: '30px 0', opacity: 0.8 }}>Transform your space with oxygen-rich, curated greenery from our expert botanists.</p>
          <button style={{ ...styles.btn, fontSize: '1.2rem', padding: '20px 50px' }}>Shop Best Sellers</button>
        </div>
      </section>

      {/* 3. Best Sellers (12 Items) */}
      <section style={{ padding: '80px 0' }}>
        <h2 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '50px' }}>Top <span style={{ color: theme.gold }}>Rated</span></h2>
        <div style={styles.grid}>
          {plants.map((p) => (
            <div 
              key={p.id} 
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={styles.plantCard(p.id)}
            >
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '15px' }} />
              <div style={{ padding: '15px 5px' }}>
                <h3 style={{ margin: '10px 0' }}>{p.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: theme.accent }}>{p.price}</span>
                  <button style={{ background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, padding: '8px 15px', borderRadius: '10px', cursor: 'pointer' }}>Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Advanced Botanist Form (Colorful & Vibrant) */}
      <section style={styles.formSection}>
        <div>
          <h2 style={{ fontSize: '4rem', color: theme.accent, lineHeight: 1 }}>Ask Our <br/> <span style={{ color: 'white' }}>Botanists.</span></h2>
          <p style={{ fontSize: '1.2rem', margin: '30px 0', opacity: 0.8 }}>Faced with yellow leaves? Our experts will diagnose your plant via a video call or chat.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ border: `1px solid ${theme.accent}`, padding: '20px', borderRadius: '20px' }}>
              <h3 style={{ margin: 0, color: theme.gold }}>12k+</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Plants Revived</p>
            </div>
            <div style={{ border: `1px solid ${theme.accent}`, padding: '20px', borderRadius: '20px' }}>
              <h3 style={{ margin: 0, color: theme.gold }}>24h</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Fast Response</p>
            </div>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '30px', border: '1px solid #1a3c2a' }}>
          {formStatus === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <h2 style={{ color: theme.accent }}>Request Sent!</h2>
              <p>Our botanist will reach out within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFormStatus('success'); }}>
              <input type="text" placeholder="Your Name" style={styles.input} required />
              <input type="email" placeholder="Email Address" style={styles.input} required />
              <select style={styles.input}>
                <option>Health Consultation</option>
                <option>New Plant Setup</option>
                <option>Pest Management</option>
              </select>
              <textarea placeholder="Describe the problem..." rows="4" style={styles.input} required></textarea>
              <button type="submit" style={{ ...styles.btn, width: '100%' }}>Book Expert Now</button>
            </form>
          )}
        </div>
      </section>

      {/* 5. Footer */}
      <footer style={{ padding: '60px 8%', borderTop: '1px solid #111', textAlign: 'center' }}>
        <h2 style={{ color: theme.accent }}>GREENHAVEN.</h2>
        <p style={{ opacity: 0.5 }}>Designed for GitHub by Anjali Kumari | 2026</p>
      </footer>
    </div>
  );
};

export default App;