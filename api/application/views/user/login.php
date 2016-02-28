<div class="row">
    <div class="col-md-4 col-md-offset-4 top-buffer">
        <form id="userLoginForm">
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Password">
            </div>
            <div class="alert alert-danger" style="display:none;" role="alert"></div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</div>


<script>
JS.ajaxCall("#userLoginForm", "<?php echo base_url(); ?>" + "user/getFormData", "<?php echo base_url(); ?>");
</script>