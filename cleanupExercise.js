// Your exercise - clean the following code
// The code counts how many times each character occur in the string.
// Execute the code with node cleanupExercise.js

const value = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";let results = {};

      for(
let i= 0;
   i<
          value.length  ;
i++ ){
let currentChar = value[i];
              if
   ( results.hasOwnProperty(currentChar)){results[currentChar]++;}      else {
results[currentChar]=1;

  }
    }                                                                                                                              console



    .log(results)




