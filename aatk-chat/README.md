# AATK Chat - Hausa Language Messaging App

A modern, responsive chat application designed specifically for Hausa language communication. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🗨️ **Real-time Messaging Interface** - Clean, WhatsApp-inspired design
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🌍 **Hausa Language Support** - Interface and placeholder text in Hausa
- 👥 **Contact Management** - Browse and select contacts from sidebar
- ✅ **Message Status Indicators** - Delivered and read receipts
- 🟢 **Online Status** - See who's currently online
- 📱 **Mobile-First** - Collapsible sidebar for mobile users
- 🎨 **Modern UI Components** - Custom-built with Tailwind CSS

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Hooks** - Modern state management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aatk-chat
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── avatar.tsx      # Avatar component
│   │   ├── badge.tsx       # Badge component
│   │   ├── button.tsx      # Button component
│   │   ├── input.tsx       # Input component
│   │   └── scroll-area.tsx # Scroll area component
│   └── aatk-app.tsx        # Main chat application component
└── lib/
    └── utils.ts            # Utility functions
```

## Key Components

### AATKApp
The main chat application component that includes:
- Contact sidebar with search functionality
- Chat header with user info and action buttons
- Message area with scrollable conversation
- Message input with emoji and attachment buttons
- Mobile-responsive navigation

### UI Components
- **Avatar**: Profile picture component with fallback initials
- **Button**: Customizable button with multiple variants
- **Input**: Form input with consistent styling
- **Badge**: Notification badges for unread messages
- **ScrollArea**: Custom scrollable container

## Features in Detail

### Messaging
- Send messages by typing and pressing Enter or clicking Send
- Messages show timestamp and delivery status
- Automatic read receipts after 2 seconds
- Support for both sent and received message styles

### Contact Management
- List of contacts with last message preview
- Online status indicators
- Unread message counters
- Click to switch between conversations

### Responsive Design
- Desktop: Side-by-side layout with contact list and chat
- Mobile: Collapsible sidebar with hamburger menu
- Smooth transitions between mobile and desktop views

## Customization

### Styling
The app uses Tailwind CSS with custom color variables defined in `globals.css`. The primary color scheme uses green tones to match WhatsApp's familiar design.

### Language
All interface text is in Hausa. To modify the language:
1. Update placeholder text in components
2. Modify contact names and messages in the data arrays
3. Update metadata in `layout.tsx`

## Development

### Adding New Features
1. Create new components in `src/components/`
2. Add UI components to `src/components/ui/`
3. Update the main `AATKApp` component as needed
4. Test on both desktop and mobile viewports

### Styling Guidelines
- Use Tailwind utility classes
- Follow the existing color scheme (green primary)
- Maintain responsive design principles
- Keep accessibility in mind

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support or questions, please open an issue in the repository.
