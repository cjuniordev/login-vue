<template>
  <div id="login">
    <div class="side-left">
        <FormLogin />
    </div>
    <div class="side-right">
        <div class="container">
            <h1>Empresa SA</h1>
            <h2>Faça parte de nosso time</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat nibh ornare quam facilisis, et rhoncus sem dignissim. Aenean pretium, diam vitae maximus fringilla, ipsum lectus fermentum magna, nec suscipit turpis massa ut tortor. Etiam massa lorem, congue non porta at, accumsan quis turpis. Sed commodo non diam non vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ut eros ipsum. Praesent ultricies, mi et faucibus maximus, libero elit tincidunt sapien, sit amet egestas odio tellus in nibh. Phasellus dictum dui vel feugiat suscipit. Aliquam pretium, est ut rutrum interdum, sem mauris sollicitudin sapien, in consequat eros ligula ut tellus. Integer nibh sem, vehicula in erat sit amet, mollis lacinia elit. Sed ut arcu ac libero ultrices posuere ut vel est. Sed placerat nulla eu nibh accumsan, quis convallis nibh posuere. Etiam suscipit et ex eu feugiat. Pellentesque ac dolor mauris. Aliquam erat volutpat. 
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import FormLogin from '../components/FormLogin';

Vue.component('FormLogin', FormLogin);

export default {
    name: 'Login',
}
</script>

<style>
#login{
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: row;
}

.side-left{
    height: 100%;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #F2F2F2;
}


.side-right{
    height: 100%;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center ;

    background-color: #3333;
}

.container{
    width: 50vh;   

    padding: 10px;
    border-radius: 10px;

    background-color: #F2F2F2;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, .2);
    
}

.container p{
    text-align: justify;
}

@media only screen and (max-width: 1000px) {
    #login{
        flex-direction: column;
    }
    .side-left{
        width: 100%;
        padding: 80px 0;
    }
    .side-right{
        width: 100%;
        padding: 80px 0;
    }
}
</style>