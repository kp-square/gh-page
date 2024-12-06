+++
date = '2024-12-04T23:07:10-05:00'
draft = true
title = 'Gaussian Shading With EDICT'
summary = 'In this research, we implement Exact Diffusion Inversion via Coupled Transformations (EDICT) with the Gaussian Shading watermarking technique in diffusion models. We observe a slight improvement in the performance of Gaussian Shading. We test the implementation on manipulated images after watermarking, and as shown in the table below, we achieve better results for most image manipulation methods, except for ColorJitter and Salt & Pepper Noise. For more details, please refer to our paper.'
+++

{{<center>}}

<h1>Watermarking in Diffusion Model: Gaussian Shading with Exact Diffusion Inversion via Coupled Transformations (EDICT)</h1>
<h4>Krishna Panthi </h4>
<i>School of Computing, Clemson University<i>
<br>
<i>kpanthi@clemson.edu</i>

<div style="text-align:left">
<h2> Summary </h2>

In this research, we implement Exact Diffusion Inversion via Coupled Transformations (EDICT) [1] with the Gaussian Shading [2] watermarking technique in diffusion models. We observe a slight improvement in the performance of Gaussian Shading. We test the implementation on manipulated images after watermarking, and as shown in the table below, we achieve better results for most image manipulation methods, except for ColorJitter and Salt & Pepper Noise. For more details, please refer to our paper.
<div>


<h2> Results </h2>
<i>Table 1. The following table shows the results obtained by testing our method against the baseline. It demonstrates that when EDICT is used, performance improves or remains consistent across all image manipulation methods, except when brightness is increased (ColorJitter) and when Salt & Pepper noise is added.</i>
<div style="border: 1px solid">

<ul style="text-align:left">
<li>
<b>TPR</b>: True Precision Rate with fixed false positive rate of 1e-6

</li>
<li>
<b>mean_acc</b>:  Mean bit accuracy

</li>

<li>
<b>std_acc</b>: Standard deviation on bit accuracy

</li>
</ul>
<hr>
<table width=100% color=white>
  <thead>
    <tr>
      <th rowspan="2"> Image Manipulations </th>
      <th colspan="2">TPR_detection</th>
      <th colspan="2">TPR_traceability</th>
      <th colspan="2">mean_acc (higher is better)</th>
      <th colspan="2">std_acc (smaller is better)</th>
    </tr>
    <tr>
      <th>Default</th>
      <th>EDICT</th>
      <th>Default</th>
      <th>EDICT</th>
      <th>Default</th>
      <th>EDICT</th>
      <th>Default</th>
      <th>EDICT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>ColorJitter (f = 6)</b></td>
      <td><b class='better'>0.979</b></td>
      <td>0.959</td>
      <td><b class='better'>0.957</b></td>
      <td>0.934</td>
      <td><b class='better'>0.952</b></td>
      <td>0.939</td>
      <td><b class='better'>0.092</b></td>
      <td>0.107</td>
    </tr>
    <tr>
      <td><b>GauBlur (r=4)</b></td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0.985</td>
      <td><b class='better'>0.988</b></td>
      <td>0.020</td>
      <td><b class='better'>0.015</b></td>
    </tr>
    <tr>
      <td><b>GauNoise</b></td>
      <td>0.995</td>
      <td><b class='better'>0.998</b></td>
      <td>0.986</td>
      <td><b class='better'>0.995</b></td>
      <td>0.954</td>
      <td><b class='better'>0.971</b></td>
      <td>0.070</td>
      <td><b class='better'>0.053</b></td>
    </tr>
    <tr>
      <td><b>Identity</b></td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <td><b>Jpeg (QF 25)</b></td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0.987</td>
      <td>0.987</td>
      <td>0.031</td>
      <td><b class='better'>0.032</b></td>
    </tr>
    <tr>
      <td><b>MedBlur (k=7)</b></td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0.005</td>
      <td><b class='better'>0.002</b></td>
    </tr>
    <tr>
      <td><b>RandomCrop (60%)</b></td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0.975</td>
      <td><b class='better'>0.976</b></td>
      <td>0.017</td>
      <td><b class='better'>0.013</b></td>
    </tr>
    <tr>
      <td><b>RandomDrop (80%)</b></td>
      <td>1</td>
      <td>1</td>
      <td>0.998</td>
      <td><b class='better'>1</b></td>
      <td>0.966</td>
      <td><b class='better'>0.969</b></td>
      <td>0.029</td>
      <td><b class='better'>0.013</b></td>
    </tr>
    <tr>
      <td><b>Resize (25%)</b></td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0.999</td>
      <td><b class='better'>1</b></td>
      <td>0.010</td>
      <td><b class='better'>0.003</b></td>
    </tr>
    <tr>
      <td><b>S&PNoise (p=0.05)</b></td>
      <td>1</td>
      <td>1</td>
      <td>0.999</td>
      <td><b class='better'>1</b></td>
      <td><b class='better'>0.935</b></td>
      <td>0.934</td>
      <td>0.071</td>
      <td><b class='better'>0.067</b></td>
    </tr>
  </tbody>
</table>
<hr>
<ul style="text-align:left">
<li>
<b>Detection</b>: (image generated by this model)
</li>
<li>
<b>Traceability</b>: (image generated by this user)
</li>
<li>
<b>Experiments conducted</b> with stable diffusion v2.1 with <a class="better" href="https://github.com/Gustavosta/Stable-Diffusion-Prompts">[Gustavosta/Stable-Diffusion-Prompts]<a> (1000 prompts/images).
</li>
<li>
<b>Watermark capacity</b>: 256 bits
</li>
</ul>
</div>

<h2>Images rendered without using EDICT vs. with using EDICT with the same prompts.</h2>
<div style="text-align: center;">
  <table>
    <tr>
      <td style="text-align: center;"><b>No EDICT</b></td>
      <td><img src="/images/projects/edict/image_0.jpg" alt="No EDICT Image 1" width="200"></td>
      <td><img src="/images/projects/edict/image_1.jpg" alt="No EDICT Image 2" width="200"></td>
      <td><img src="/images/projects/edict/image_2.jpg" alt="No EDICT Image 3" width="200"></td>
      <td><img src="/images/projects/edict/image_3.jpg" alt="No EDICT Image 3" width="200"></td>
      <td><img src="/images/projects/edict/image_4.jpg" alt="No EDICT Image 3" width="200"></td>
    </tr>
    <tr>
      <td style="text-align: center;"><b>Using EDICT</b></td>
      <td><img src="/images/projects/edict/image_edict_0.jpg" alt="Using EDICT Image 1" width="200"></td>
      <td><img src="/images/projects/edict/image_edict_1.jpg" alt="Using EDICT Image 2" width="200"></td>
      <td><img src="/images/projects/edict/image_edict_2.jpg" alt="Using EDICT Image 3" width="200"></td>
      <td><img src="/images/projects/edict/image_edict_3.jpg" alt="Using EDICT Image 4" width="200"></td>
      <td><img src="/images/projects/edict/image_edict_4.jpg" alt="Using EDICT Image 5" width="200"></td>
    </tr>
  </table>
  <i>Figure 1: Upon closer inspection, we can observe that the images generated using EDICT are generally of higher quality.</i>
</div>

<div style="text-align: left">
<h2>References</h2>
[1]Wallace, Bram, Akash Gokul, and Nikhil Naik. "Edict: Exact diffusion inversion via coupled transformations." Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2023.
<br><br>
[2]Yang, Zijin, et al. "Gaussian Shading: Provable Performance-Lossless Image Watermarking for Diffusion Models." Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2024.
<div>
{{</center>}}
