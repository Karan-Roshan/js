# JavaScript Data Types
JavaScript data types are divided into **Primitive** and **Non-Primitive (Reference)** types based on how values are stored and accessed in memory.


## Primitive Data Types
Primitive data types store **single, simple values** and are **immutable** (their value cannot be changed directly).

### Key Characteristics
- Store actual values
- Fixed size
- Faster access
- No methods attached (handled internally by JavaScript)

### Types & Examples
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Data Type</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Number</td>
      <td><code>let age = 20;</code></td>
    </tr>
    <tr>
      <td>String</td>
      <td><code>let name = "Karan";</code></td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td><code>let isActive = true;</code></td>
    </tr>
    <tr>
      <td>Undefined</td>
      <td><code>let x;</code></td>
    </tr>
    <tr>
      <td>Null</td>
      <td><code>let y = null;</code></td>
    </tr>
    <tr>
      <td>Symbol</td>
      <td><code>let id = Symbol("id");</code></td>
    </tr>
    <tr>
      <td>BigInt</td>
      <td><code>let big = 12345678901234567890n;</code></td>
    </tr>
  </tbody>
</table>


## Non-Primitive (Reference) Data Types
Non-primitive data types store **multiple values** and are stored by **reference (memory address)**.

### Key Characteristics
- Can store collections or complex data
- Dynamic size
- Have built-in methods
- Changes affect all references

### Types & Examples
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Data Type</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Object</td>
      <td><code>{ name: "Karan", age: 20 }</code></td>
    </tr>
    <tr>
      <td>Array</td>
      <td><code>[1, 2, 3]</code></td>
    </tr>
    <tr>
      <td>Function</td>
      <td><code>function greet() {}</code></td>
    </tr>
  </tbody>
</table>


## Key Difference
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Primitive</th>
      <th>Non-Primitive</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stores</td>
      <td>Single value</td>
      <td>Multiple values</td>
    </tr>
    <tr>
      <td>Memory</td>
      <td>Stack</td>
      <td>Heap</td>
    </tr>
    <tr>
      <td>Mutability</td>
      <td>Immutable</td>
      <td>Mutable</td>
    </tr>
    <tr>
      <td>Passed By</td>
      <td>Value</td>
      <td>Reference</td>
    </tr>
  </tbody>
</table>


# JavaScript typeof Verification Table
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Data Type</th>
      <th>Example</th>
      <th>typeof Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Number</td>
      <td><code>typeof 10</code></td>
      <td>number</td>
    </tr>
    <tr>
      <td>String</td>
      <td><code>typeof "Hello"</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td><code>typeof true</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td>Undefined</td>
      <td><code>typeof undefined</code></td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>Null</td>
      <td><code>typeof null</code></td>
      <td><b>object</b></td>
    </tr>
    <tr>
      <td>Symbol</td>
      <td><code>typeof Symbol("id")</code></td>
      <td>symbol</td>
    </tr>
    <tr>
      <td>BigInt</td>
      <td><code>typeof 123n</code></td>
      <td>bigint</td>
    </tr>
    <tr>
      <td>Object</td>
      <td><code>typeof {}</code></td>
      <td>object</td>
    </tr>
    <tr>
      <td>Array</td>
      <td><code>typeof []</code></td>
      <td>object</td>
    </tr>
    <tr>
      <td>Function</td>
      <td><code>typeof function(){}</code></td>
      <td>function</td>
    </tr>
  </tbody>
</table>