// ignore: avoid_web_libraries_in_flutter
import 'dart:js_util';
import 'package:flutter/material.dart';
import 'hello_js.dart';

void main() async {
  await promiseToFuture(init());
  print("Init complete.");
  print_int(12345);
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Text(
        "The sum of 20 and 21 is ${sum(20, 21)}.\n"
        "In Chrome, hit CTRL+SHIFT+J to see console output.",
      ),
    );
  }
}
