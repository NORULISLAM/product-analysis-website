import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-info fw-bold p-4 m-4'>Question 1: What is Context API </h1>

            <p className='p-2'>The context is designed to share data such as the current authenticated user and preferred language that can be considered "global" to a tree of React components.  And the API that generates this context is the Context API.</p>
            <p className='p-2'> Context provides a way to pass data in the component tree without having to manually pass properties down in each hierarchy.
                In a typical React application, data is passed top-down (parent-to-child) through props, but this approach is required by many components in the application for certain types of properties . It's a hassle for settings, UI. The context provides a way to share values ​​like there between components without explicitly passing properties at each hierarchy of the tree.</p>


            <h1 className='text-info fw-bold p-4 m-4'>Question 2: What is Semantic tag </h1>

            <p className='p-4 m-4'> We need to understand what text mining is "Semantic"
                Before we can define semantic tag,
                Text mining is the process of using artificial intelligence (AI)  After this text is organized, semantic tagging will play an important role in the process.

                Semantic tagging is the process of connecting elements of an technology to a database or document "such as a website or computer file".  Using this form of text annotation efficiently describes the key components of a data structure, making it easier to find later and understanding its relevance to other resources within the same ontology. I can.  Semantic tagging takes a portion of the text and a predefined tag as input and predicts and outputs whether the text conveys the semantics of the tag.
            </p>


            <h1 className='text-info fw-bold p-4 m-4'>Question 2: Inline block vs Inline blocks elements differences </h1>
            <p className='p-4 m-4'>Easily difference in Inline block vs Inline blocks elements: "inline cannot use width, height, and margin above and below."
                "while inline-block can use both".</p>
        </div>
    );
};

export default Blogs;