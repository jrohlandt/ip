<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $project->title }}</title>
    <style>
        .iframe-container {
            width: 100%;
            height: auto;
            /*height: 175px;*/
            max-height: 100%;
            border: none;
        }
    </style>
</head>
<body>
<iframe src="{{ env('PLAYER_URL') }}?projectId={{$project->id}}"
        allow="autoplay"
        class="iframe-container"
        ></iframe>

<script>
    window.onload = function() {
        function setIframeHeight() {
            var iframe = document.querySelector('.iframe-container');
            var width = iframe.clientWidth;
            var height = Math.ceil((width * 56.25) / 100);
            // console.log('width: ---------', width, height);
            iframe.style.height = height+'px';
        }

        setIframeHeight();

        window.onresize = setIframeHeight;
    };
</script>
</body>
</html>