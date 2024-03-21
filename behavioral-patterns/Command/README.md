
# Creational Patterns
These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

## Command

Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method.


### How to implement
1. Declare the command interface with a single execution method.
1. Start extracting requests into concrete command classes that implement the command interface. Each class must have a set of fields for storing the request arguments along with a reference to the actual receiver object. All these values must be initialized via the command’s constructor.
1. Identify classes that will act as senders. Add the fields for storing commands into these classes. Senders should communicate with their commands only via the command interface. Senders usually don’t create command objects on their own, but rather get them from the client code.
1. Change  the senders so they execute the command instead of sending a request to the receiver directly.
1. The client should initialize objects in the following order:
1. Create receivers.
1. Create commands, and associate them with receivers if needed.
1. Create senders, and associate them with specific commands.

### JS Steps

1. Sender/Invoker
    1. It will have executeCommand method
    1. This executeCommand method receive a Command instance
    1. This method is in charge of execute Concrete Commands
1. Command
    1. Has execute method to override
1. Concrete Command
    1. Inherist Command interface
    1. Overwrite execute method with the bussiness logic (could return a modifies value)
1. Client
    1. Init a Sender instance
    1. Init a Concrete Command
    1. Pass the Concrete Command as part of the executeCommand method of the Receiver instance
