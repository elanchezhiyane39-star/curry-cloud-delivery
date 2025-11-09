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
  { id: '1', name: 'Butter Chicken', price: 320, category: 'indian-food', description: 'Creamy tomato-based curry', image: '/src/assets/food/butter-chicken.jpg' },
  { id: '2', name: 'Biryani', price: 280, category: 'indian-food', description: 'Fragrant rice with spices', image: '/src/assets/food/biryani.jpg' },
  { id: '3', name: 'Paneer Tikka Masala', price: 250, category: 'indian-food', description: 'Cottage cheese in spiced gravy', image: '/src/assets/food/paneer-tikka-masala.jpg' },
  { id: '4', name: 'Dal Makhani', price: 180, category: 'indian-food', description: 'Creamy black lentils', image: '/src/assets/food/dal-makhani.jpg' },
  { id: '5', name: 'Tandoori Chicken', price: 350, category: 'indian-food', description: 'Clay oven grilled chicken', image: '/src/assets/food/tandoori-chicken.jpg' },
  { id: '6', name: 'Palak Paneer', price: 220, category: 'indian-food', description: 'Spinach with cottage cheese', image: '/src/assets/food/palak-paneer.jpg' },
  { id: '7', name: 'Chole Bhature', price: 150, category: 'indian-food', description: 'Chickpea curry with fried bread', image: '/src/assets/food/chole-bhature.jpg' },
  { id: '8', name: 'Masala Dosa', price: 120, category: 'indian-food', description: 'Crispy rice crepe with potato', image: '/src/assets/food/masala-dosa.jpg' },
  { id: '9', name: 'Rogan Josh', price: 340, category: 'indian-food', description: 'Kashmiri lamb curry', image: '/src/assets/food/rogan-josh.jpg' },
  { id: '10', name: 'Pav Bhaji', price: 140, category: 'indian-food', description: 'Spiced vegetable mash with bread', image: '/src/assets/food/pav-bhaji.jpg' },

  // Juices
  { id: '11', name: 'Mango Juice', price: 80, category: 'juices', description: 'Fresh mango juice', image: '/src/assets/food/mango-juice.jpg' },
  { id: '12', name: 'Orange Juice', price: 70, category: 'juices', description: 'Freshly squeezed orange juice', image: '/src/assets/food/orange-juice.jpg' },
  { id: '13', name: 'Apple Juice', price: 70, category: 'juices', description: 'Pure apple juice', image: '/src/assets/food/apple-juice.jpg' },
  { id: '14', name: 'Watermelon Juice', price: 60, category: 'juices', description: 'Refreshing watermelon juice', image: '/src/assets/food/watermelon-juice.jpg' },
  { id: '15', name: 'Pomegranate Juice', price: 90, category: 'juices', description: 'Fresh pomegranate juice', image: '/src/assets/food/pomegranate-juice.jpg' },
  { id: '16', name: 'Pineapple Juice', price: 75, category: 'juices', description: 'Tropical pineapple juice', image: '/src/assets/food/pineapple-juice.jpg' },
  { id: '17', name: 'Grape Juice', price: 85, category: 'juices', description: 'Sweet grape juice', image: '/src/assets/food/grape-juice.jpg' },
  { id: '18', name: 'Mixed Fruit Juice', price: 95, category: 'juices', description: 'Blend of seasonal fruits', image: '/src/assets/food/mixed-fruit-juice.jpg' },
  { id: '19', name: 'Lemon Juice', price: 50, category: 'juices', description: 'Fresh lemon with mint', image: '/src/assets/food/lemon-juice.jpg' },
  { id: '20', name: 'Sugarcane Juice', price: 40, category: 'juices', description: 'Fresh sugarcane juice', image: '/src/assets/food/sugarcane-juice.jpg' },

  // Snacks
  { id: '21', name: 'Samosa', price: 30, category: 'snacks', description: 'Crispy potato-filled pastry', image: '/src/assets/food/samosa.jpg' },
  { id: '22', name: 'Pakora', price: 40, category: 'snacks', description: 'Mixed vegetable fritters', image: '/src/assets/food/pakora.jpg' },
  { id: '23', name: 'Spring Roll', price: 50, category: 'snacks', description: 'Crispy vegetable roll', image: '/src/assets/food/spring-roll.jpg' },
  { id: '24', name: 'French Fries', price: 80, category: 'snacks', description: 'Crispy golden fries', image: '/src/assets/food/french-fries.jpg' },
  { id: '25', name: 'Paneer Pakora', price: 90, category: 'snacks', description: 'Cottage cheese fritters', image: '/src/assets/food/paneer-pakora.jpg' },
  { id: '26', name: 'Aloo Tikki', price: 35, category: 'snacks', description: 'Spiced potato patty', image: '/src/assets/food/aloo-tikki.jpg' },
  { id: '27', name: 'Vada Pav', price: 40, category: 'snacks', description: 'Potato fritter in bun', image: '/src/assets/food/vada-pav.jpg' },
  { id: '28', name: 'Bread Pakora', price: 45, category: 'snacks', description: 'Stuffed bread fritters', image: '/src/assets/food/bread-pakora.jpg' },
  { id: '29', name: 'Corn Chaat', price: 60, category: 'snacks', description: 'Spiced corn salad', image: '/src/assets/food/corn-chaat.jpg' },
  { id: '30', name: 'Dhokla', price: 50, category: 'snacks', description: 'Steamed gram flour cake', image: '/src/assets/food/dhokla.jpg' },

  // Ice Cream
  { id: '31', name: 'Vanilla Ice Cream', price: 80, category: 'ice-cream', description: 'Classic vanilla', image: '/src/assets/food/vanilla-ice-cream.jpg' },
  { id: '32', name: 'Chocolate Ice Cream', price: 90, category: 'ice-cream', description: 'Rich chocolate', image: '/src/assets/food/chocolate-ice-cream.jpg' },
  { id: '33', name: 'Strawberry Ice Cream', price: 95, category: 'ice-cream', description: 'Fresh strawberry', image: '/src/assets/food/strawberry-ice-cream.jpg' },
  { id: '34', name: 'Mango Ice Cream', price: 100, category: 'ice-cream', description: 'Tropical mango', image: '/src/assets/food/mango-ice-cream.jpg' },
  { id: '35', name: 'Butterscotch Ice Cream', price: 85, category: 'ice-cream', description: 'Caramel butterscotch', image: '/src/assets/food/butterscotch-ice-cream.jpg' },
  { id: '36', name: 'Pistachio Ice Cream', price: 110, category: 'ice-cream', description: 'Creamy pistachio', image: '/src/assets/food/pistachio-ice-cream.jpg' },
  { id: '37', name: 'Kulfi', price: 70, category: 'ice-cream', description: 'Traditional Indian ice cream', image: '/src/assets/food/kulfi.jpg' },
  { id: '38', name: 'Black Forest Ice Cream', price: 105, category: 'ice-cream', description: 'Chocolate with cherry', image: '/src/assets/food/black-forest-ice-cream.jpg' },
  { id: '39', name: 'Coffee Ice Cream', price: 90, category: 'ice-cream', description: 'Rich coffee flavor', image: '/src/assets/food/coffee-ice-cream.jpg' },
  { id: '40', name: 'Mint Chocolate Chip', price: 95, category: 'ice-cream', description: 'Mint with chocolate', image: '/src/assets/food/mint-chocolate-chip.jpg' },
  { id: '41', name: 'Cookie Dough Ice Cream', price: 110, category: 'ice-cream', description: 'Vanilla with cookie pieces', image: '/src/assets/food/cookie-dough-ice-cream.jpg' },
  { id: '42', name: 'Tutti Frutti Ice Cream', price: 85, category: 'ice-cream', description: 'Mixed fruit flavor', image: '/src/assets/food/tutti-frutti-ice-cream.jpg' },
];

export const categories = [
  { id: 'indian-food', name: 'Indian Food', icon: '🍛' },
  { id: 'juices', name: 'Juices', icon: '🥤' },
  { id: 'snacks', name: 'Snacks', icon: '🍟' },
  { id: 'ice-cream', name: 'Ice Cream', icon: '🍨' },
] as const;
