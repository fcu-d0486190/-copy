<template>
  <div class="models">
    <div class="container-fluid p-5">
      <div class="row mb-4">
        <div class="col-md-12">
          <div class="card border-0 rounded-0">
            <div class="card-title mb-1 p-3">
              <h5>模型管理</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive-md">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">模型名稱</th>
                      <th scope="col">訓練資料集</th>
                      <th scope="col">測試資料集</th>
                      <th scope="col">建模歷程</th>
                      <th scope="col">刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Model_1</td>
                      <td>data_1_train</td>
                      <td>data_1_test</td>
                      <td>查看</td>
                      <td>
                        <a class="btn btn-sm btn-outline-lightning rounded-0">
                          <i class="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Models",
    props:{
        mes: String
    }
	
}
</script>


<style lang="scss">
 .table th, .table td {
    vertical-align: middle !important; 
}
</style>