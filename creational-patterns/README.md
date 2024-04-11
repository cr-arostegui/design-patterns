# Creational Patterns
These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

## Singleton

Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

### Problem
The Singleton pattern solves two problems at the same time, violating the Single Responsibility Principle:

1. Ensure that a class has just a single instance.
1. Provide a global access point to that instance.

### Solution
All implementations of the Singleton have these two steps in common:

- Make the default constructor private, to prevent other objects from using the new operator with the Singleton class.
- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

### Real World Anlogy
The government is an excellent example of the Singleton pattern. A country can have only one official government. Regardless of the personal identities of the individuals who form governments, the title, “The Government of X”, is a global point of access that identifies the group of people in charge.

### Applicability
- Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.
-  Use the Singleton pattern when you need stricter control over global variables.

### How to Implement
1. Add a private static field to the class for storing the singleton instance.
1. Declare a public static creation method for getting the singleton instance.
1. Implement “lazy initialization” inside the static method. It should create a new object on its first call and put it into the static field. The method should always return that instance on all subsequent calls.
1. Make the constructor of the class private. The static method of the class will still be able to call the constructor, but not the other objects.
1. Go over the client code and replace all direct calls to the singleton’s constructor with calls to its static creation method.