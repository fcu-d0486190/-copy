<template>
  <div class="prediction">
    <vue-step :now-step="nowStep" :step-list="stepList"></vue-step>
    <div class="row" v-show="nowStep === 1">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h5 class="m-0">請選擇一個模型</h5>
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
          <div class="card-body" @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div class="card-body">
            <div>
              <input
                type="file"
                style="display: none"
                id="file"
                :accept="SheetJSFT"
                @change="_change"
              />
              <a id="downlink"></a>
              <el-button class="button" @click="uploadFile()">請選擇文件</el-button>
            </div>
          </div>
          <div class="card-body">
            <!-- <el-table :data="data" border height="250" style="width: 100%">
            <el-table-column v-for="(col, index) in cols" :key="index" :prop="col" :label="col"></el-table-column>-->
            <vue-bootstrap4-table
              :rows="rows"
              :columns="columns"
              :config="config"
              v-loading="loading"
              element-loading-text="載入中..."
            ></vue-bootstrap4-table>
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
            <h5 class="m-0">預測結果</h5>
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
            <button class="btn btn-secondary rounded-0">輸出結果</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueStep from "vue-step";
import XLSX from "xlsx";
import VueBootstrap4Table from "vue-bootstrap4-table";

const make_cols = refstr =>
  Array(XLSX.utils.decode_range(refstr).e.c + 1)
    .fill(0)
    .map((x, i) => ({ name: XLSX.utils.encode_col(i), key: i }));
const _SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm"
]
  .map(function(x) {
    return "." + x;
  })
  .join(",");

export default {
  name: "Prediction",
  props: {
    mes: String
  },
  data() {
    return {
      nowStep: 1,
      stepList: ["First Step", "Second Step", "Third Step"],
      loading: false, // 载入中
      file: "",
      SheetJSFT: _SheetJSFT,
      rows: [],
      columns: [],
      config: {
        checkbox_rows: false,
        rows_selectable: true,
        show_refresh_button: false,
        show_reset_button: false,
        highlight_row_hover: true,
        highlight_row_hover_color: "#e9ebee",
        card_title: ""
      }
    };
  },
  mounted() {
    this.file = document.getElementById("file");
    this.outFile = document.getElementById("downlink");
  },
  methods: {
    nextstep() {
      this.nowStep += 1;
    },
    upstep() {
      this.nowStep -= 1;
    },
    uploadFile() {
      this.file.click();
    },
    _suppress(evt) {
      evt.stopPropagation();
      evt.preventDefault();
    },
    _drop(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      const files = evt.dataTransfer.files;
      if (files && files[0]) this._file(files[0]);
    },
    _change(evt) {
      this.rows = [];
      this.columns = [];
      this.loading = true;
      const files = evt.target.files;
      this.config = {
        checkbox_rows: false,
        rows_selectable: true,
        show_refresh_button: false,
        show_reset_button: false,
        highlight_row_hover: true,
        highlight_row_hover_color: "#e9ebee",
        card_title: files[0].name
      };
      if (files && files[0]) {
        this._file(files[0]);
        this.loading = false;
      }
    },
    _file(file) {
      /* Boilerplate to set up FileReader */
      const reader = new FileReader();
      reader.onload = e => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws);
        /* Update state */
        for (var i in data[0]) {
          this.columns.push({ label: i, name: i });
        }
        this.rows = data;
      };
      reader.readAsBinaryString(file);
    }
  },
  components: {
    VueBootstrap4Table,
    vueStep
  }
};
</script>