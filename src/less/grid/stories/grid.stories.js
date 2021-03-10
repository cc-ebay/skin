import "./grid-stories.less"

export default { title: 'Grid/Grid' };

export const grid = () => `
<section class="demo-grid body-container">
<pre>
value         |0px     512px    600px    900px    1280px   1456px
key           |xs      sm       md       lg       xl       xl2
screen width  |--------|--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
</pre>
   <header class="demo-grid__header">
      <h2 class="demo-grid__title">Demo Grid (no collapse)</h2>
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
      <h2 class="demo-grid__title">Demo Grid (collapsable)</h2>
   </header>
   <div class="demo-grid__row demo-grid__outer-row">
      <article class="demo-grid__col is-4-wrap">
         <div class="demo-grid__block"><span>col(@md: 8, @lg: 4)</span></div>
      </article>
      <article class="demo-grid__col is-4-wrap">
         <div class="demo-grid__block">
            <span>col(@md: 8, @lg: 4)</span>
            <div class="demo-grid__row">
               <article class="demo-grid__col is-1-in-4-wrap">
                  <div class="demo-grid__block"><span>col(@md: 1, @cols: 4)</span></div>
               </article>
               <article class="demo-grid__col is-3-in-4-wrap">
                  <div class="demo-grid__block"><span>col(@md: 3, @cols: 4)</span></div>
               </article>
            </div>
         </div>
      </article>
      <article class="demo-grid__col is-4-wrap-xs-8">
         <div class="demo-grid__block"><span>col(@xs: 8, @lg: 4)</span></div>
      </article>
      <article class="demo-grid__col is-4-wrap-xs-8">
         <div class="demo-grid__block"><span>col(@xs: 8, @lg: 4)</span></div>
      </article>
   </div>
   <div class="demo-grid__row demo-grid__outer-row">
      <article class="demo-grid__col is-16">
         <div class="demo-grid__row">
            <article class="demo-grid__col is-4-wrap">
               <div class="demo-grid__block"><span>col(@md: 8, @lg: 4)</span></div>
            </article>
            <article class="demo-grid__col is-12-wrap">
               <div class="demo-grid__block"><span>col(@md: 8, @lg: 12)</span></div>
            </article>
         </div>
      </article>
   </div>
</section>
<div class="grid-breakpoints container-content">
   <div class="xs">.xs</div>
   <div class="sm">.sm</div>
   <div class="md">.md</div>
   <div class="lg">.lg</div>
   <div class="xl">.xl</div>
</div>

`;


