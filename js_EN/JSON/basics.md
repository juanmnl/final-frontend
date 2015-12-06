# Javascript Object Notation (JSON)

## Why?

- Objects that contain Properties and Values  
- Readable Data Format  
- Data can be used (fetched & parsed) by any programming language  

## Syntax

**Names and Values always wrapped in double quotes ("...")**

- Name/Value pairs -> each value is paired with a name  
`{ "name": "Juanmnl" }`  
- Data Properties are separated by commas  
`{ "name": "Thom", "type": "Dog" }`  
- Array of data Objects  
```json
[
  {
    "name": "Juanmnl",
    "type": "Human"
  },
  {
    "name": "Thom",
    "type": "Dog"
  }
]
```   
- Comments aren't permitted  

#### JSON vs. XML  

- JSON can use arrays []  
- JSON is shorter and more readable  
- JSON doesn't require end-tags


### Objects in JS  

```javascript
var myPerson = {
  name  : 'Juanmnl',
  type  : 'human',
  gender: 'masculine'
};

console.log(myPerson);
console.log(myPerson.name);
```
