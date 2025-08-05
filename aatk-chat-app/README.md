# AATK Chat App

A modern, responsive chat application built with Next.js 15, TypeScript, and Tailwind CSS. This application features a WhatsApp-like interface with a focus on Hausa language support.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with green theme
- **Contact List**: Sidebar with contact information and online status
- **Real-time Chat**: Message interface with read receipts and timestamps
- **Search Functionality**: Search for contacts and messages
- **Mobile Menu**: Collapsible sidebar for mobile devices
- **Message Status**: Visual indicators for sent, delivered, and read messages
- **Hausa Language Support**: Interface and sample data in Hausa

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React hooks (useState)

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

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── scroll-area.tsx
│   └── AATKApp.tsx          # Main chat application
└── lib/
    └── utils.ts             # Utility functions
```

## Components

### AATKApp
The main chat application component that includes:
- Contact list sidebar
- Chat interface
- Message input
- Mobile responsive design

### UI Components
- **Avatar**: User profile pictures with fallback initials
- **Badge**: Notification counters and status indicators
- **Button**: Various button styles and sizes
- **Input**: Form input fields with proper styling
- **ScrollArea**: Custom scrollable areas

## Features in Detail

### Contact Management
- Display contact list with avatars
- Show online/offline status
- Display last message and timestamp
- Unread message counters
- Contact selection and highlighting

### Chat Interface
- Message bubbles with different styles for sent/received
- Timestamp display
- Read receipt indicators (✓, ✓✓)
- Responsive message layout
- Scrollable message area

### Mobile Responsiveness
- Collapsible sidebar on mobile
- Touch-friendly interface
- Proper viewport handling
- Responsive typography

### Message Input
- Text input with placeholder
- Send button (appears when typing)
- Voice message button (when input is empty)
- Attachment and emoji buttons

## Customization

### Styling
The application uses Tailwind CSS for styling. You can customize:
- Colors: Modify the green theme in the component classes
- Layout: Adjust responsive breakpoints
- Typography: Change font sizes and weights

### Data
Sample data is included in the `AATKApp.tsx` component:
- `contacts`: Array of contact information
- `messages`: Array of chat messages

Replace with your own data or connect to a backend API.

## Future Enhancements

- Real-time messaging with WebSocket
- User authentication
- File sharing capabilities
- Voice and video calls
- Message encryption
- Push notifications
- Dark mode support

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
