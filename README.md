# TK Messaging App

A Flutter-based messaging application with a clean and modern UI, similar to popular messaging platforms like WhatsApp and Telegram.

## Features

- **Login Screen**: Simple authentication interface
- **Chat List**: Display all conversations with users
- **Chat Screen**: Real-time messaging interface with message bubbles
- **Status Screen**: View and manage status updates
- **Settings Screen**: App configuration and user preferences

## Screenshots

The app includes the following main screens:
- Login screen with a simple "Login to TK" button
- Chat list showing 10 sample users
- Individual chat screens with message bubbles
- Status screen for viewing status updates
- Settings screen with various options

## Getting Started

### Prerequisites

- Flutter SDK (>=3.0.0)
- Dart SDK
- Android Studio / VS Code
- Android Emulator or physical device

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tk_messaging_app
```

2. Install dependencies:
```bash
flutter pub get
```

3. Run the app:
```bash
flutter run
```

## Project Structure

```
lib/
├── main.dart          # Main application entry point
├── screens/           # Screen widgets (to be organized)
│   ├── login_screen.dart
│   ├── chat_list_screen.dart
│   ├── chat_screen.dart
│   ├── status_screen.dart
│   └── settings_screen.dart
└── widgets/           # Reusable widgets (to be organized)
```

## Dependencies

- `flutter`: Core Flutter framework
- `cupertino_icons`: iOS-style icons

## Development

This is a basic messaging app template that can be extended with:
- Real authentication system
- Backend integration
- Push notifications
- File sharing
- Voice/video calls
- End-to-end encryption

## License

This project is for educational purposes.
