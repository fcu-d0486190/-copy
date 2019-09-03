<template>
  <div class="dataset">
    <div class="container-fluid p-5">
      <div class="row mb-4">
        <div class="col-md-12">
          <div class="card border-0 rounded-0">
            <div class="card-title mb-1 p-3">
              <h5>資料集管理</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive-md">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">名稱</th>
                      <th scope="col">型態</th>
                      <th scope="col">Row * Column</th>
                      <th scope="col">編輯/刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Dataset_1</td>
                      <td>input</td>
                      <td>12312 * 12</td>
                      <td>
                        <a class="btn btn-sm btn-outline-lightning rounded-0 mr-2">
                          <i class="far fa-edit"></i>
                        </a>
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
  name: "Dataset",
  props: {
    mes: String
  }
};
</script>