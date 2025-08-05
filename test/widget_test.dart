import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:tk_messaging_app/main.dart';

void main() {
  testWidgets('TK App smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const TKApp());

    // Verify that the login button is present
    expect(find.text('Login to TK'), findsOneWidget);
  });
}