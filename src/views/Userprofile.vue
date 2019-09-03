<template>
  <div class="userprofile">
    <div class="container-fluid p-5">
      <div class="row">
        <div class="form-group col-md-12">
          <form>
            <!-- Password -->
            <div class="actions-toolbar py-2 mb-4">
              <h5 class="mb-1">Change password</h5>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-control-label">Old password</label>
                  <input class="form-control" type="password" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-control-label">New password</label>
                  <input class="form-control" type="password" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-control-label">Confirm password</label>
                  <input class="form-control" type="password" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button type="button" class="btn btn-sm btn-primary btn-margain">Update password</button>
                <a href="recover.html" class="btn btn-sm btn-secondary">I forgot my password</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="form-group col-md-12">
          <form>
            <!-- Password -->
            <div class="actions-toolbar py-2 mb-4">
              <h5 class="mb-1">Change username</h5>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-control-label">New username</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-control-label">New username</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button type="button" class="btn btn-sm btn-primary btn-margain">Change my username</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Userprofile",
  props: {
    mes: String
  }
};
</script>

<style lang="scss">
.btn {
  position: relative;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}
.btn-margain {
  margin: 5%;
}
</style>