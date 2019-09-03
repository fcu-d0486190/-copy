<template>
    <div class="container register">
        <div class="card">
            <div>
                <h2>註冊</h2>
            </div>
            <form class="sign-in" action="#">
                <div class="inputgroup">
                    <i :class="'ion-ios-mail'"></i>
                    <input type="email" placeholder="電子信箱" />
                </div>
                <div class="inputgroup">
                    <i :class="'ion-ios-key'"></i>
                    <input type="password" placeholder="密碼" />
                </div>

                
               

                <button>立即註冊</button>
                <p>Already have an account? 
                    <a href="#">Sign in</a>
                </p>
            </form>
            <!-- <form class="sign-up" action="#">
                <h2>新用戶註冊</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password"/>
                <button>註冊</button>
            </form> -->
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        signUp: false
      }
    }
  }
</script>

<style lang="scss" scoped>

.container{
    display: flex;
    justify-content: center;
    margin-top: 5%;
}

.card{
    width: 370px;
    height:385px;
    padding: 24px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                0 10px 10px rgba(0, 0, 0, .2);
    form{
        display: flex;
        flex-direction: column;
        .inputgroup{
            width: 100%;
            display: flex;
            box-sizing: border-box;
            margin-bottom: 10px;
            border: 1px solid #cad1d7;
            color: #8898aa;
            background-color: #fff;
            border-radius: .375rem;
            align-items: center;
            overflow: hidden;
            input{
                outline: none;
                padding: .625rem .75rem;
                border: none;
                opacity: 0.5;
                flex:9;
            }
            input:hover{
                opacity: 1;
            }

            i{
                flex:1;
                font-size: 20px;
            }
        }
    }

    h2 {
        margin: 10px 0 40px;
    }
    p {
        margin: 20px 0 30px;
    }
    a {
        color: #222;
        text-decoration: none;
        margin: 15px 0;
        font-size: 1rem;
    }

    button {
        border-radius: 5px;
        border: 1px solid #009345;
        background-color: #009345;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 40px;
        letter-spacing: .025em;
        text-transform: uppercase;
        cursor: pointer;
        opacity: 0.5;
        transition: transform .15s ease;
        border: none;
        outline: none;
    }
    button:hover{
        transform: translatey(-1px);
        box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
        opacity: 1;
    }

   

}

</style>