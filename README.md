# AATK - Messaging App

A modern messaging application built with Next.js, featuring Hausa language support and a clean, WhatsApp-inspired interface.

## Features

- 🎨 Modern, responsive UI with shadcn/ui components
- 🌍 Hausa language support with native greetings and phrases
- 💬 Real-time chat interface (UI ready)
- 👥 Contact management with online status indicators
- 🔍 Search functionality for contacts
- 📱 Mobile-responsive design
- 🎯 Clean, intuitive user experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aatk-messaging-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── scroll-area.tsx
│   └── aatk-app.tsx      # Main messaging app component
├── lib/
│   └── utils.ts          # Utility functions
└── ...
```

## Features Overview

### Contact List
- Display contacts with avatars and online status
- Show last message and timestamp
- Unread message badges
- Search functionality

### Chat Interface
- Message bubbles with delivery/read status
- Send messages with Enter key
- Emoji and attachment buttons (UI ready)
- Voice message support (UI ready)

### Hausa Language Support
The app includes common Hausa phrases:
- "Sannu, yaya kake?" - Hello, how are you?
- "Lafiya lau" - I'm fine
- "Na gode sosai" - Thank you very much
- "Barka da safe" - Good morning
- "Sai anjima" - See you later

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

The app is structured to easily add:
- Real-time messaging with WebSocket/Socket.io
- Message persistence with database
- User authentication
- File/image sharing
- Voice/video calls

## Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind config in `tailwind.config.ts`
- Customize component styles in individual component files

### Language
- Add more Hausa phrases in the contacts/messages data
- Extend with additional languages as needed

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
