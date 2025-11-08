export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'indian-food' | 'juices' | 'snacks' | 'ice-cream';
  description?: string;
  image?: string;
}

export const menuItems: MenuItem[] = [
  // Indian Food
  { id: '1', name: 'Butter Chicken', price: 320, category: 'indian-food', description: 'Creamy tomato-based curry' },
  { id: '2', name: 'Biryani', price: 280, category: 'indian-food', description: 'Fragrant rice with spices' },
  { id: '3', name: 'Paneer Tikka Masala', price: 250, category: 'indian-food', description: 'Cottage cheese in spiced gravy' },
  { id: '4', name: 'Dal Makhani', price: 180, category: 'indian-food', description: 'Creamy black lentils' },
  { id: '5', name: 'Tandoori Chicken', price: 350, category: 'indian-food', description: 'Clay oven grilled chicken' },
  { id: '6', name: 'Palak Paneer', price: 220, category: 'indian-food', description: 'Spinach with cottage cheese' },
  { id: '7', name: 'Chole Bhature', price: 150, category: 'indian-food', description: 'Chickpea curry with fried bread' },
  { id: '8', name: 'Masala Dosa', price: 120, category: 'indian-food', description: 'Crispy rice crepe with potato' },
  { id: '9', name: 'Rogan Josh', price: 340, category: 'indian-food', description: 'Kashmiri lamb curry' },
  { id: '10', name: 'Pav Bhaji', price: 140, category: 'indian-food', description: 'Spiced vegetable mash with bread' },

  // Juices
  { id: '11', name: 'Mango Juice', price: 80, category: 'juices', description: 'Fresh mango juice' },
  { id: '12', name: 'Orange Juice', price: 70, category: 'juices', description: 'Freshly squeezed orange juice' },
  { id: '13', name: 'Apple Juice', price: 70, category: 'juices', description: 'Pure apple juice' },
  { id: '14', name: 'Watermelon Juice', price: 60, category: 'juices', description: 'Refreshing watermelon juice' },
  { id: '15', name: 'Pomegranate Juice', price: 90, category: 'juices', description: 'Fresh pomegranate juice' },
  { id: '16', name: 'Pineapple Juice', price: 75, category: 'juices', description: 'Tropical pineapple juice' },
  { id: '17', name: 'Grape Juice', price: 85, category: 'juices', description: 'Sweet grape juice' },
  { id: '18', name: 'Mixed Fruit Juice', price: 95, category: 'juices', description: 'Blend of seasonal fruits' },
  { id: '19', name: 'Lemon Juice', price: 50, category: 'juices', description: 'Fresh lemon with mint' },
  { id: '20', name: 'Sugarcane Juice', price: 40, category: 'juices', description: 'Fresh sugarcane juice' },

  // Snacks
  { id: '21', name: 'Samosa', price: 30, category: 'snacks', description: 'Crispy potato-filled pastry' },
  { id: '22', name: 'Pakora', price: 40, category: 'snacks', description: 'Mixed vegetable fritters' },
  { id: '23', name: 'Spring Roll', price: 50, category: 'snacks', description: 'Crispy vegetable roll' },
  { id: '24', name: 'French Fries', price: 80, category: 'snacks', description: 'Crispy golden fries' },
  { id: '25', name: 'Paneer Pakora', price: 90, category: 'snacks', description: 'Cottage cheese fritters' },
  { id: '26', name: 'Aloo Tikki', price: 35, category: 'snacks', description: 'Spiced potato patty' },
  { id: '27', name: 'Vada Pav', price: 40, category: 'snacks', description: 'Potato fritter in bun' },
  { id: '28', name: 'Bread Pakora', price: 45, category: 'snacks', description: 'Stuffed bread fritters' },
  { id: '29', name: 'Corn Chaat', price: 60, category: 'snacks', description: 'Spiced corn salad' },
  { id: '30', name: 'Dhokla', price: 50, category: 'snacks', description: 'Steamed gram flour cake' },

  // Ice Cream
  { id: '31', name: 'Vanilla Ice Cream', price: 80, category: 'ice-cream', description: 'Classic vanilla' },
  { id: '32', name: 'Chocolate Ice Cream', price: 90, category: 'ice-cream', description: 'Rich chocolate' },
  { id: '33', name: 'Strawberry Ice Cream', price: 95, category: 'ice-cream', description: 'Fresh strawberry' },
  { id: '34', name: 'Mango Ice Cream', price: 100, category: 'ice-cream', description: 'Tropical mango' },
  { id: '35', name: 'Butterscotch Ice Cream', price: 85, category: 'ice-cream', description: 'Caramel butterscotch' },
  { id: '36', name: 'Pistachio Ice Cream', price: 110, category: 'ice-cream', description: 'Creamy pistachio' },
  { id: '37', name: 'Kulfi', price: 70, category: 'ice-cream', description: 'Traditional Indian ice cream' },
  { id: '38', name: 'Black Forest Ice Cream', price: 105, category: 'ice-cream', description: 'Chocolate with cherry' },
  { id: '39', name: 'Coffee Ice Cream', price: 90, category: 'ice-cream', description: 'Rich coffee flavor' },
  { id: '40', name: 'Mint Chocolate Chip', price: 95, category: 'ice-cream', description: 'Mint with chocolate' },
  { id: '41', name: 'Cookie Dough Ice Cream', price: 110, category: 'ice-cream', description: 'Vanilla with cookie pieces' },
  { id: '42', name: 'Tutti Frutti Ice Cream', price: 85, category: 'ice-cream', description: 'Mixed fruit flavor' },
];

export const categories = [
  { id: 'indian-food', name: 'Indian Food', icon: '🍛' },
  { id: 'juices', name: 'Juices', icon: '🥤' },
  { id: 'snacks', name: 'Snacks', icon: '🍟' },
  { id: 'ice-cream', name: 'Ice Cream', icon: '🍨' },
] as const;
