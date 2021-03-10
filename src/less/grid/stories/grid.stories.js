import "./grid-stories.less"

export default { title: 'Grid/Grid' };

export const headings = () => `
<section class="demo-grid body-container">
<pre>
value         |0px     512px    600px    900px    1280px   1456px
key           |xs      sm       md       lg       xl       xl2
screen width  |--------|--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
</pre>
   <header class="demo-grid__header">
      <h2 class="demo-grid__title">Demo Grid</h2>
   </header>
   <div class="demo-grid__row demo-grid__outer-row">
      <article class="demo-grid__col is-4">
         <div class="demo-grid__block"><span>col 4</span></div>
      </article>
      <article class="demo-grid__col is-4">
         <div class="demo-grid__block">
            <span>col 4</span>
            <div class="demo-grid__row">
               <article class="demo-grid__col is-2-in-4">
                  <div class="demo-grid__block"><span>col 2</span></div>
               </article>
               <article class="demo-grid__col is-2-in-4">
                  <div class="demo-grid__block"><span>col 2</span></div>
               </article>
            </div>
         </div>
      </article>
      <article class="demo-grid__col is-4">
         <div class="demo-grid__block"><span>col 4</span></div>
      </article>
      <article class="demo-grid__col is-4">
         <div class="demo-grid__block"><span>col 4</span></div>
      </article>
   </div>
   <div class="demo-grid__row demo-grid__outer-row">
      <article class="demo-grid__col is-16">
         <div class="demo-grid__row">
            <article class="demo-grid__col is-4">
               <div class="demo-grid__block"><span>col 4</span></div>
            </article>
            <article class="demo-grid__col is-12">
               <div class="demo-grid__block"><span>col 12</span></div>
            </article>
         </div>
      </article>
   </div>


<header class="demo-grid__header">
      <h2 class="demo-grid__title">Demo Grid</h2>
   </header>
   <div class="demo-grid__row demo-grid__outer-row">
      <article class="demo-grid__col is-4-wrap">
         <div class="demo-grid__block"><span>col 4 wrap</span></div>
      </article>
      <article class="demo-grid__col is-4-wrap">
         <div class="demo-grid__block">
            <span>col 4 wrap</span>
            <div class="demo-grid__row">
               <article class="demo-grid__col is-2-in-4-wrap">
                  <div class="demo-grid__block"><span>col 2</span></div>
               </article>
               <article class="demo-grid__col is-2-in-4-wrap">
                  <div class="demo-grid__block"><span>col 2</span></div>
               </article>
            </div>
         </div>
      </article>
      <article class="demo-grid__col is-4-wrap">
         <div class="demo-grid__block"><span>col 4 wrap</span></div>
      </article>
      <article class="demo-grid__col is-4-wrap">
         <div class="demo-grid__block"><span>col 4 wrap</span></div>
      </article>
   </div>
   <div class="demo-grid__row demo-grid__outer-row">
      <article class="demo-grid__col is-16">
         <div class="demo-grid__row">
            <article class="demo-grid__col is-4-wrap">
               <div class="demo-grid__block"><span>col 4  wrap</span></div>
            </article>
            <article class="demo-grid__col is-12-wrap">
               <div class="demo-grid__block"><span>col 12 wrap</span></div>
            </article>
         </div>
      </article>
   </div>
</section>
`;


