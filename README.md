# TK - Flutter Messaging App

A Flutter messaging application with a clean, modern UI inspired by popular messaging platforms.

## Features

- **Login Screen**: Simple authentication entry point
- **Chat List**: View all your conversations with contact names and timestamps
- **Individual Chat**: Send and receive messages with time stamps
- **Status Screen**: View and share status updates
- **Settings Screen**: Access app configuration and preferences

## Getting Started

### Prerequisites
- Flutter SDK (>=3.0.0)
- Dart SDK
- Android Studio / VS Code with Flutter extensions

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tk_app
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
├── main.dart          # Main app entry point with all screens
├── screens/           # Individual screen widgets
└── widgets/           # Reusable UI components

android/               # Android-specific configuration
ios/                   # iOS-specific configuration
test/                  # Unit and widget tests
```

## App Flow

1. **Login** → Tap "Login to TK" to enter the app
2. **Chat List** → Browse conversations, access Status/Settings via app bar
3. **Chat Screen** → Send messages, view conversation history
4. **Status Screen** → View status updates from contacts
5. **Settings Screen** → Access app preferences

## Development

### Running Tests
```bash
flutter test
```

### Building for Production
```bash
# Android
flutter build apk

# iOS
flutter build ios
```

## Tech Stack

- **Framework**: Flutter
- **Language**: Dart
- **UI**: Material Design
- **State Management**: StatefulWidget (local state)
- **Navigation**: Named routes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request
