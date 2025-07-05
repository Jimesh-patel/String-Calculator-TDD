# 🖐️ String Calculator - TDD Kata

Welcome to the **String Calculator Kata**, implemented using **JavaScript** and tested via **Jest** following strict **TDD (Test-Driven Development)** principles.

> **TDD Cycle**: 🔴 RED → 🟢 GREEN → 🔵 REFACTOR

---

## 🗂 Project Structure

```bash
src/
 ├── calculator.js              # Main class
 ├── helper/
 │   ├── delimiterParser.js     # Parses delimiter logic
 │   └── validator.js           # Validates negative input

tests/
 ├── calculator.test.js         # Unit tests for add method
 ├── delimiterParser.test.js    # Unit tests for delimiter logic
 └── validator.test.js         # Unit tests for validator
```

---

## 🚀 What This Project Does

A `StringCalculator` class that:

* Parses and adds numbers from formatted strings
* Supports various delimiters and rules
* Validates input and throws exceptions when needed

All of this is built **test-first**, feature by feature.

---

## ✅ Features Covered

| Feature                                                                | Status |
| ---------------------------------------------------------------------- | ------ |
| Return 0 for an empty string                                           | ✅      |
| Return the number itself for single number input                       | ✅      |
| Return sum for two numbers separated by comma                          | ✅      |
| Support for multiple numbers                                           | ✅      |
| Support for new line (`\n`) as delimiter                               | ✅      |
| Support for custom single-character delimiter `//;\n1;2`               | ✅      |
| Throw exception on negative numbers with full list of them             | ✅      |
| Ignore numbers greater than 1000                                       | ✅      |
| Support for delimiters of any length: `//[***]\n1***2***3`             | ✅      |
| Support for multiple custom delimiters: `//[*][%]\n1*2%3`              | ✅      |
| Support for multiple delimiters with length > 1: `//[**][%%]\n2**7%%3` | ✅      |
| Track how many times `add()` method is called                          | ✅      |
| Trigger an `AddOccured` event after each `add()` execution             | ✅      |

---

## 🛠️ Setup & Install

```bash
# Clone repository
git clone https://github.com/Jimesh-patel/String-Calculator-TDD.git
cd String-Calculator-TDD
```

```bash
# Install dependencies
npm install
```

## 🧪 Running Tests

```bash
# Basic test suite
npm test
```

```bash
# Verbose test logging
npm run test:verbose
```

---

## 🔮 Future Extensions

> Features we're considering for upcoming versions:

* ✨ **Floating-Point Support** — Enable handling of decimal numbers
* 🔢 **Enhanced Large Number Handling** — Optional inclusion of numbers > 1000
* 🌐 **Calculator API** — Expose core logic via RESTful API endpoints
* 🧮 **Interactive Web UI** — Visual interface for users to input and view results
