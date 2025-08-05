import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:tk_app/main.dart';

void main() {
  testWidgets('TK app smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const TKApp());

    // Verify that the login screen is displayed
    expect(find.text('Login to TK'), findsOneWidget);
    
    // Tap the login button
    await tester.tap(find.text('Login to TK'));
    await tester.pumpAndSettle();

    // Verify that we navigate to the chat list screen
    expect(find.text('TK Chats'), findsOneWidget);
  });
}