<template>
  <div class="createmodel">
    <vue-step :now-step="nowStep" :step-list="stepList"></vue-step>
    <div class="row" v-show="nowStep === 1">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h5 class="m-0">請選擇一個類神經網路</h5>
          </div>
          <div class="card-body">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">基礎類神經網路</label>
          </div>
          <div class="card-body">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">模糊類神經網路</label>
          </div>
          <div class="card-body">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Heap概念的補償式基礎類神經網路</label>
          </div>
          <div class="card-body d-flex flex-row justify-content-end">
            <button class="btn btn-secondary rounded-0" @click="nextstep">下一步</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-show="nowStep === 2">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h5 class="m-0">請設定輸入值</h5>
          </div>
          <div class="card-body">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">選取資料集</label>
          </div>
          <div class="card-body">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div class="card-body">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div class="card-body d-flex flex-row justify-content-end">
            <button class="btn btn-secondary rounded-0" @click="upstep">上一步</button>
            <button class="btn btn-secondary rounded-0" @click="nextstep">下一步</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-show="nowStep === 3">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h5 class="m-0">設定訓練集，測試集比例</h5>
          </div>
          <div class="card-body">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div class="card-body">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div class="card-body">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div class="card-body d-flex flex-row justify-content-end">
            <button class="btn btn-secondary rounded-0" @click="upstep">上一步</button>
            <button class="btn btn-secondary rounded-0">儲存模型</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueStep from "vue-step";

export default {
  name: "Createmodel",
  props: {
    mes: String
  },
  data() {
    return {
      nowStep: 1,
      stepList: ["First Step", "Second Step", "Third Step"]
    };
  },
  components: {
    vueStep
  },
  methods: {
    nextstep() {
      this.nowStep += 1;
    },
    upstep() {
      this.nowStep -= 1;
    }
  }
};
</script>