# AATK Chat Application

A modern, responsive chat application built with Next.js 14, TypeScript, and Tailwind CSS. This application features a WhatsApp-like interface with a green theme and supports both desktop and mobile views.

## Features

- 🎨 **Modern UI**: Clean, responsive design with a green theme
- 📱 **Mobile Responsive**: Works seamlessly on desktop and mobile devices
- 💬 **Real-time Chat Interface**: WhatsApp-like messaging experience
- 🔍 **Contact Search**: Search functionality for contacts
- 👥 **Contact List**: Display contacts with online status and unread message counts
- 📨 **Message Status**: Visual indicators for message delivery and read status
- 🎯 **Interactive Elements**: Hover effects and smooth transitions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React useState hooks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aatk-chat-app
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

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── avatar.tsx       # Avatar component
│   │   ├── badge.tsx        # Badge component
│   │   ├── button.tsx       # Button component
│   │   ├── input.tsx        # Input component
│   │   └── scroll-area.tsx  # Scroll area component
│   └── AATKApp.tsx          # Main chat application component
└── lib/
    └── utils.ts             # Utility functions
```

## Components

### AATKApp.tsx
The main chat application component that includes:
- Contact list sidebar
- Chat interface
- Message input
- Mobile responsive navigation

### UI Components
- **Avatar**: User profile pictures with fallback initials
- **Badge**: Unread message count indicators
- **Button**: Interactive buttons with variants
- **Input**: Form input fields
- **ScrollArea**: Custom scrollable areas

## Features in Detail

### Contact Management
- Display contacts with avatars and online status
- Show last message and timestamp
- Unread message count badges
- Contact selection and highlighting

### Chat Interface
- Message bubbles with different styles for sent/received
- Message delivery and read status indicators
- Timestamp display
- Responsive message layout

### Mobile Responsiveness
- Collapsible sidebar on mobile
- Touch-friendly interface
- Proper viewport handling

### Message Input
- Text input with placeholder
- Send button (appears when typing)
- Voice message button (when not typing)
- Attachment and emoji buttons

## Customization

### Colors
The application uses a green theme that can be customized by modifying the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 142.1 76.2% 36.3%; /* Green color */
  /* ... other variables */
}
```

### Adding New Features
To add new features like:
- Real-time messaging
- File uploads
- Voice messages
- User authentication

You can extend the existing components and add new API routes in the `src/app/api/` directory.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository.
